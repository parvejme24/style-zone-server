import { SizeGuideModel } from './sizeGuide.model';

export const SizeGuideService = {
  getAll: () => SizeGuideModel.findAll(),
  getById: (id: string) => SizeGuideModel.findById(id),
  create: (data: any) => SizeGuideModel.create(data),
  update: (id: string, data: any) => SizeGuideModel.update(id, data),
  delete: (id: string) => SizeGuideModel.delete(id),
};
