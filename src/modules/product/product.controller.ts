import { Request, Response } from "express";
import { ProductModel } from "./product.model";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.update(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await ProductModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
