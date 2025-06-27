import { PrismaClient, Prisma, Product } from '../../generated/prisma';
import { ReviewModel } from '../review/review.model';
import { DiscountModel } from '../discount/discount.model';
import { SizeGuideModel } from '../sizeGuide/sizeGuide.model';

const prisma = new PrismaClient();

async function enrichProduct(product: Product) {
  const [reviews, discount, sizeGuide, variants] = await Promise.all([
    ReviewModel.findByProductId(product.id),
    DiscountModel.findByProductId(product.id),
    SizeGuideModel.findByCategoryAndBrand(product.category_id, product.brand_id),
    prisma.productVariant.findMany({ where: { product_id: product.id } })
  ]);
  return {
    ...product,
    reviews,
    discount,
    sizeGuide,
    variants
  };
}

export const ProductModel = {
  findAll: async (): Promise<any[]> => {
    const products = await prisma.product.findMany();
    return Promise.all(products.map(enrichProduct));
  },
  findById: async (id: string): Promise<any | null> => {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return null;
    return enrichProduct(product);
  },
  create: async (data: Prisma.ProductCreateInput): Promise<Product> => {
    return prisma.product.create({ data });
  },
  update: async (id: string, data: Prisma.ProductUpdateInput): Promise<Product> => {
    return prisma.product.update({ where: { id }, data });
  },
  delete: async (id: string): Promise<Product> => {
    return prisma.product.delete({ where: { id } });
  },
};
