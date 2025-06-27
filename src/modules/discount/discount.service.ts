import { DiscountModel } from "./discount.model";
import { Prisma } from "../../generated/prisma";

export const DiscountService = {
  getByProductId: (productId: string) =>
    DiscountModel.findByProductId(productId),
  getById: (id: string) => DiscountModel.findById(id),
  createForProduct: (productId: string, data: Omit<Prisma.FlashSaleCreateInput, 'product'>) => DiscountModel.createForProduct(productId, data),
  update: (id: string, data: Prisma.FlashSaleUpdateInput) =>
    DiscountModel.update(id, data),
  delete: (id: string) => DiscountModel.delete(id),
};
