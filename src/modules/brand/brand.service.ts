// brand.service.ts
import { BrandModel } from './brand.model';

export const BrandService = {
  getAll: () => BrandModel.findAll(),
  getById: (id: string) => BrandModel.findById(id),
  create: (data: any) => BrandModel.create(data),
  update: (id: string, data: any) => BrandModel.update(id, data),
  delete: (id: string) => BrandModel.delete(id),
}; 