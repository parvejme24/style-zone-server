import { Request, Response } from "express";
import { DiscountModel } from "./discount.model";
import { Prisma } from "../../generated/prisma";

export const getDiscountByProductId = async (req: Request, res: Response) => {
  try {
    const discount = await DiscountModel.findByProductId(req.params.productId);
    if (!discount)
      return res
        .status(404)
        .json({ error: "Discount not found for this product" });
    res.json(discount);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch discount for product" });
  }
};

export const getDiscountById = async (req: Request, res: Response) => {
  try {
    const discount = await DiscountModel.findById(req.params.id);
    if (!discount) return res.status(404).json({ error: "Discount not found" });
    res.json(discount);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch discount" });
  }
};

export const createDiscount = async (req: Request, res: Response) => {
  try {
    const data: Prisma.FlashSaleCreateInput = req.body;
    const discount = await DiscountModel.create(data);
    res.status(201).json(discount);
  } catch (error) {
    res.status(500).json({ error: "Failed to create discount" });
  }
};

export const updateDiscount = async (req: Request, res: Response) => {
  try {
    const data: Prisma.FlashSaleUpdateInput = req.body;
    const discount = await DiscountModel.update(req.params.id, data);
    res.json(discount);
  } catch (error) {
    res.status(500).json({ error: "Failed to update discount" });
  }
};

export const deleteDiscount = async (req: Request, res: Response) => {
  try {
    await DiscountModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete discount" });
  }
};
