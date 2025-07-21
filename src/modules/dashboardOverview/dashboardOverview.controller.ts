import { Request, Response } from "express";
import { DashboardOverviewService } from "./dashboardOverview.service";

export const getTotalCustomers = async (req: Request, res: Response) => {
  try {
    const totalCustomers = await DashboardOverviewService.getTotalCustomers();
    res.json({ totalCustomers });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch total customers" });
  }
};

export const getBestCategories = async (req: Request, res: Response) => {
  try {
    const categories = await DashboardOverviewService.getBestCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch best categories" });
  }
};

export const getBestBrands = async (req: Request, res: Response) => {
  try {
    const brands = await DashboardOverviewService.getBestBrands();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch best brands" });
  }
};

export const getBestProducts = async (req: Request, res: Response) => {
  try {
    const products = await DashboardOverviewService.getBestProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch best products" });
  }
};

export const getTotalSales = async (req: Request, res: Response) => {
  try {
    const totalSales = await DashboardOverviewService.getTotalSales();
    res.json({ totalSales });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch total sales" });
  }
};

export const getTodaysSales = async (req: Request, res: Response) => {
  try {
    const todaysSales = await DashboardOverviewService.getTodaysSales();
    res.json({ todaysSales });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch today's sales" });
  }
};

export const getRevenueChart = async (req: Request, res: Response) => {
  try {
    const chart = await DashboardOverviewService.getRevenueChart(req.query);
    res.json(chart);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch revenue chart" });
  }
};

export const getBestSellingProducts = async (req: Request, res: Response) => {
  try {
    const products = await DashboardOverviewService.getBestSellingProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch best selling products" });
  }
};

export const getRecentOrders = async (req: Request, res: Response) => {
  try {
    const orders = await DashboardOverviewService.getRecentOrders(req.query);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recent orders" });
  }
};
