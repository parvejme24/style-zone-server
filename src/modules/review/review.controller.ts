import { Request, Response } from "express";
import { ReviewModel } from "./review.model";
import { Prisma } from "../../generated/prisma";

export const getReviewsByProductId = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewModel.findByProductId(req.params.productId);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews for product" });
  }
};

export const getReviewById = async (req: Request, res: Response) => {
  try {
    const review = await ReviewModel.findById(req.params.id);
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch review" });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const data: Prisma.ProductReviewRatingCreateInput = req.body;
    const review = await ReviewModel.create(data);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: "Failed to create review" });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const data: Prisma.ProductReviewRatingUpdateInput = req.body;
    const review = await ReviewModel.update(req.params.id, data);
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: "Failed to update review" });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    await ReviewModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete review" });
  }
};
