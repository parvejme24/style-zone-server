import { PrismaClient, Prisma, FlashSale } from "../../generated/prisma";

const prisma = new PrismaClient();

export const DiscountModel = {
  findByProductId: async (product_id: string): Promise<FlashSale | null> => {
    return prisma.flashSale.findFirst({ where: { product_id } });
  },
  findById: async (id: string): Promise<FlashSale | null> => {
    return prisma.flashSale.findUnique({ where: { id } });
  },
  createForProduct: async (product_id: string, data: Omit<Prisma.FlashSaleCreateInput, 'product'>): Promise<FlashSale> => {
    return prisma.flashSale.create({
      data: {
        ...data,
        product: { connect: { id: product_id } }
      }
    });
  },
  update: async (
    id: string,
    data: Prisma.FlashSaleUpdateInput
  ): Promise<FlashSale> => {
    return prisma.flashSale.update({ where: { id }, data });
  },
  delete: async (id: string): Promise<FlashSale> => {
    return prisma.flashSale.delete({ where: { id } });
  },
};
