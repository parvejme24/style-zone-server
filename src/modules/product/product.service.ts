import { ProductModel } from './product.model';
import { Prisma } from '../../generated/prisma';

export const ProductService = {
  getAll: () => ProductModel.findAll(),
  getById: (id: string) => ProductModel.findById(id),
  create: (data: Prisma.ProductCreateInput) => ProductModel.create(data),
  update: (id: string, data: Prisma.ProductUpdateInput) => ProductModel.update(id, data),
  delete: (id: string) => ProductModel.delete(id),
};
