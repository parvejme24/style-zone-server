import { Request, Response } from "express";
import { SizeGuideModel } from "./sizeGuide.model";
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getSizeGuideById = async (req: Request, res: Response) => {
  try {
    const sizeGuide = await SizeGuideModel.findById(req.params.id);
    if (!sizeGuide) return res.status(404).json({ error: "Size guide not found" });
    res.json(sizeGuide);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch size guide" });
  }
};

export const getSizeGuideByProductId = async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findUnique({ where: { id: req.params.productId } });
    if (!product) return res.status(404).json({ error: "Product not found" });
    const sizeGuide = await SizeGuideModel.findByCategoryAndBrand(product.category_id, product.brand_id);
    if (!sizeGuide) return res.status(404).json({ error: "Size guide not found for this product" });
    res.json(sizeGuide);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch size guide for product" });
  }
};

export const createSizeGuideForProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    if (!productId) return res.status(400).json({ error: "Product ID is required" });
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: "Product not found" });
    const { size_data } = req.body;
    const sizeGuide = await SizeGuideModel.create({
      category: { connect: { id: product.category_id } },
      brand: { connect: { id: product.brand_id } },
      size_data
    });
    res.status(201).json(sizeGuide);
  } catch (error) {
    res.status(500).json({ error: "Failed to create size guide for product" });
  }
};

export const updateSizeGuide = async (req: Request, res: Response) => {
  try {
    const sizeGuide = await SizeGuideModel.update(req.params.id, req.body);
    res.json(sizeGuide);
  } catch (error) {
    res.status(500).json({ error: "Failed to update size guide" });
  }
};

export const deleteSizeGuide = async (req: Request, res: Response) => {
  try {
    await SizeGuideModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete size guide" });
  }
};
