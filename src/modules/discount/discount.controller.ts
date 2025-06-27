import { Request, Response } from "express";
import { DiscountModel } from "./discount.model";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const getDiscountByProductId = async (req: Request, res: Response) => {
  try {
    const discount = await DiscountModel.findByProductId(req.params.productId);
    if (!discount)
      return res.status(404).json({ error: "Discount not found for this product" });
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

export const createDiscountForProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    if (!productId) return res.status(400).json({ error: "Product ID is required" });
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: "Product not found" });
    const { discount_percentage, start_time, end_time, categoryId } = req.body;
    const discount = await DiscountModel.createForProduct(productId, {
      discount_percentage,
      start_time,
      end_time,
      ...(categoryId && { Category: { connect: { id: categoryId } } })
    });
    res.status(201).json(discount);
  } catch (error) {
    res.status(500).json({ error: "Failed to create discount for product" });
  }
};

export const updateDiscount = async (req: Request, res: Response) => {
  try {
    const discount = await DiscountModel.update(req.params.id, req.body);
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
