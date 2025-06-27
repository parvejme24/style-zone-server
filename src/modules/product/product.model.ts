import { PrismaClient, Product } from '../../generated/prisma';

const prisma = new PrismaClient();

export const ProductModel = {
  findAll: async (): Promise<Product[]> => {
    return prisma.product.findMany();
  },
  findById: async (id: string): Promise<Product | null> => {
    return prisma.product.findUnique({ where: { id } });
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
