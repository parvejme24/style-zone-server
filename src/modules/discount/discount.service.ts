import { DiscountModel } from "./discount.model";
import { Prisma } from "../../generated/prisma";

export const DiscountService = {
  getByProductId: (productId: string) =>
    DiscountModel.findByProductId(productId),
  getById: (id: string) => DiscountModel.findById(id),
  create: (data: Prisma.FlashSaleCreateInput) => DiscountModel.create(data),
  update: (id: string, data: Prisma.FlashSaleUpdateInput) =>
    DiscountModel.update(id, data),
  delete: (id: string) => DiscountModel.delete(id),
};
