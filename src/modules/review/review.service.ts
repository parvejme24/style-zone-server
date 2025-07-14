import { ReviewModel } from './review.model';
import { Prisma } from '../../generated/prisma';

export const ReviewService = {
  getAllByProductId: (productId: string) => ReviewModel.findByProductId(productId),
  getById: (id: string) => ReviewModel.findById(id),
  create: (data: Prisma.ProductReviewRatingCreateInput) => ReviewModel.create(data),
  update: (id: string, data: Prisma.ProductReviewRatingUpdateInput) => ReviewModel.update(id, data),
  delete: (id: string) => ReviewModel.delete(id),
};
