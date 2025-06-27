import { Request, Response } from "express";
import { SizeGuideModel } from "./sizeGuide.model";

export const getAllSizeGuides = async (req: Request, res: Response) => {
  try {
    const sizeGuides = await SizeGuideModel.findAll();
    res.json(sizeGuides);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch size guides" });
  }
};

export const getSizeGuideById = async (req: Request, res: Response) => {
  try {
    const sizeGuide = await SizeGuideModel.findById(req.params.id);
    if (!sizeGuide) return res.status(404).json({ error: "Size guide not found" });
    res.json(sizeGuide);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch size guide" });
  }
};

export const createSizeGuide = async (req: Request, res: Response) => {
  try {
    const sizeGuide = await SizeGuideModel.create(req.body);
    res.status(201).json(sizeGuide);
  } catch (error) {
    res.status(500).json({ error: "Failed to create size guide" });
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
