import {
  PrismaClient,
  Prisma,
  ProductReviewRating,
} from "../../generated/prisma";

const prisma = new PrismaClient();

export const ReviewModel = {
  findByProductId: async (
    product_id: string
  ): Promise<ProductReviewRating[]> => {
    return prisma.productReviewRating.findMany({ where: { product_id } });
  },
  findById: async (id: string): Promise<ProductReviewRating | null> => {
    return prisma.productReviewRating.findUnique({ where: { id } });
  },
  createForProduct: async (
    product_id: string,
    data: Omit<Prisma.ProductReviewRatingCreateInput, 'product'>
  ): Promise<ProductReviewRating> => {
    return prisma.productReviewRating.create({
      data: {
        ...data,
        product: { connect: { id: product_id } }
      }
    });
  },
  create: async (
    data: Prisma.ProductReviewRatingCreateInput
  ): Promise<ProductReviewRating> => {
    return prisma.productReviewRating.create({ data });
  },
  update: async (
    id: string,
    data: Prisma.ProductReviewRatingUpdateInput
  ): Promise<ProductReviewRating> => {
    return prisma.productReviewRating.update({ where: { id }, data });
  },
  delete: async (id: string): Promise<ProductReviewRating> => {
    return prisma.productReviewRating.delete({ where: { id } });
  },
};
