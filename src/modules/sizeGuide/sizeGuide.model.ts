import { PrismaClient, Prisma } from '../../generated/prisma';
import type { SizeGuide } from '../../generated/prisma';

const prisma = new PrismaClient();

export const SizeGuideModel = {
  findAll: async (): Promise<SizeGuide[]> => {
    return prisma.sizeGuide.findMany();
  },
  findById: async (id: string): Promise<SizeGuide | null> => {
    return prisma.sizeGuide.findUnique({ where: { id } });
  },
  findByCategoryAndBrand: async (category_id: string, brand_id: string): Promise<SizeGuide | null> => {
    return prisma.sizeGuide.findFirst({ where: { category_id, brand_id } });
  },
  createForProduct: async (category_id: string, brand_id: string, size_data: Prisma.InputJsonValue): Promise<SizeGuide> => {
    return prisma.sizeGuide.create({
      data: {
        category: { connect: { id: category_id } },
        brand: { connect: { id: brand_id } },
        size_data
      }
    });
  },
  create: async (data: Prisma.SizeGuideCreateInput): Promise<SizeGuide> => {
    return prisma.sizeGuide.create({ data });
  },
  update: async (id: string, data: Prisma.SizeGuideUpdateInput): Promise<SizeGuide> => {
    return prisma.sizeGuide.update({ where: { id }, data });
  },
  delete: async (id: string): Promise<SizeGuide> => {
    return prisma.sizeGuide.delete({ where: { id } });
  },
};
