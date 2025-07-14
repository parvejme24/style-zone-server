// brand.model.ts
import { PrismaClient, Brand } from '../../generated/prisma';

const prisma = new PrismaClient();

export const BrandModel = {
  findAll: async (): Promise<Brand[]> => {
    return prisma.brand.findMany();
  },
  findById: async (id: string): Promise<Brand | null> => {
    return prisma.brand.findUnique({ where: { id } });
  },
  create: async (data: Omit<Brand, 'id' | 'created_at' | 'updated_at'>): Promise<Brand> => {
    return prisma.brand.create({ data });
  },
  update: async (id: string, data: Partial<Brand>): Promise<Brand> => {
    return prisma.brand.update({ where: { id }, data });
  },
  delete: async (id: string): Promise<Brand> => {
    return prisma.brand.delete({ where: { id } });
  },
}; 