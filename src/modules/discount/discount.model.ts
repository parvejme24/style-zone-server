import { PrismaClient, Prisma, FlashSale } from "../../generated/prisma";

const prisma = new PrismaClient();

export const DiscountModel = {
  findByProductId: async (product_id: string): Promise<FlashSale | null> => {
    return prisma.flashSale.findFirst({ where: { product_id } });
  },
  findById: async (id: string): Promise<FlashSale | null> => {
    return prisma.flashSale.findUnique({ where: { id } });
  },
  create: async (data: Prisma.FlashSaleCreateInput): Promise<FlashSale> => {
    return prisma.flashSale.create({ data });
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
