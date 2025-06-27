import { ProductModel } from './product.model';

export const ProductService = {
  getAll: () => ProductModel.findAll(),
  getById: (id: string) => ProductModel.findById(id),
  create: (data: any) => ProductModel.create(data),
  update: (id: string, data: any) => ProductModel.update(id, data),
  delete: (id: string) => ProductModel.delete(id),
};
