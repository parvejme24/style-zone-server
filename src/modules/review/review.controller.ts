import { Request, Response } from "express";
import { ReviewModel } from "./review.model";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

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

export const createReviewForProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    if (!productId) return res.status(400).json({ error: "Product ID is required" });
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: "Product not found" });
    const { user_id, rating, comment } = req.body;
    const review = await ReviewModel.create({
      product: { connect: { id: productId } },
      user_id,
      rating,
      comment
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: "Failed to create review for product" });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const review = await ReviewModel.update(req.params.id, req.body);
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
