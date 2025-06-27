import { CategoryModel } from './category.model';

export const CategoryService = {
  getAll: () => CategoryModel.findAll(),
  getById: (id: string) => CategoryModel.findById(id),
  create: (data: any) => CategoryModel.create(data),
  update: (id: string, data: any) => CategoryModel.update(id, data),
  delete: (id: string) => CategoryModel.delete(id),
};
