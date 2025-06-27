import { PrismaClient, Product } from '../../generated/prisma';
import { ReviewModel } from '../review/review.model';
import { DiscountModel } from '../discount/discount.model';
import { SizeGuideModel } from '../sizeGuide/sizeGuide.model';

const prisma = new PrismaClient();

export const ProductModel = {
  findAll: async (): Promise<Product[]> => {
    return prisma.product.findMany();
  },
  findById: async (id: string): Promise<Product | null> => {
    return prisma.product.findUnique({ where: { id } });
  },
  findFullById: async (id: string) => {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return null;
    const [reviews, discount, sizeGuide, variants] = await Promise.all([
      ReviewModel.findByProductId(id),
      DiscountModel.findByProductId(id),
      SizeGuideModel.findByCategoryAndBrand(product.category_id, product.brand_id),
      prisma.productVariant.findMany({ where: { product_id: id } })
    ]);
    return {
      ...product,
      reviews,
      discount,
      sizeGuide,
      variants
    };
  },
  create: async (data: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product> => {
    return prisma.product.create({ data });
  },
  update: async (id: string, data: Partial<Product>): Promise<Product> => {
    return prisma.product.update({ where: { id }, data });
  },
  delete: async (id: string): Promise<Product> => {
    return prisma.product.delete({ where: { id } });
  },
};
