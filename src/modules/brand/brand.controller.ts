// brand.controller.ts
import { Request, Response } from "express";
import { BrandModel } from "./brand.model";

export const getAllBrands = async (req: Request, res: Response) => {
  try {
    const brands = await BrandModel.findAll();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch brands" });
  }
};

export const getBrandById = async (req: Request, res: Response) => {
  try {
    const brand = await BrandModel.findById(req.params.id);
    if (!brand) return res.status(404).json({ error: "Brand not found" });
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch brand" });
  }
};

export const createBrand = async (req: Request, res: Response) => {
  try {
    const brand = await BrandModel.create(req.body);
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ error: "Failed to create brand" });
  }
};

export const updateBrand = async (req: Request, res: Response) => {
  try {
    const brand = await BrandModel.update(req.params.id, req.body);
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: "Failed to update brand" });
  }
};

export const deleteBrand = async (req: Request, res: Response) => {
  try {
    await BrandModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete brand" });
  }
};
