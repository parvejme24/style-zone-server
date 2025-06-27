import { PrismaClient, Category } from '../../generated/prisma';

const prisma = new PrismaClient();

export const CategoryModel = {
  findAll: async (): Promise<Category[]> => {
    return prisma.category.findMany();
  },
  findById: async (id: string): Promise<Category | null> => {
    return prisma.category.findUnique({ where: { id } });
  },
  create: async (data: Omit<Category, 'id' | 'created_at' | 'updated_at'>): Promise<Category> => {
    return prisma.category.create({ data });
  },
  update: async (id: string, data: Partial<Category>): Promise<Category> => {
    return prisma.category.update({ where: { id }, data });
  },
  delete: async (id: string): Promise<Category> => {
    return prisma.category.delete({ where: { id } });
  },
};
