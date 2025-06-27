import { SizeGuideModel } from './sizeGuide.model';
import { Prisma } from '../../generated/prisma';

export const SizeGuideService = {
  getById: (id: string) => SizeGuideModel.findById(id),
  getByCategoryAndBrand: (categoryId: string, brandId: string) => SizeGuideModel.findByCategoryAndBrand(categoryId, brandId),
  createForProduct: (categoryId: string, brandId: string, sizeData: Prisma.InputJsonValue) => SizeGuideModel.createForProduct(categoryId, brandId, sizeData),
  update: (id: string, data: Prisma.SizeGuideUpdateInput) => SizeGuideModel.update(id, data),
  delete: (id: string) => SizeGuideModel.delete(id),
};
