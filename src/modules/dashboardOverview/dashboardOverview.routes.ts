import { Router } from "express";
import {
  getTotalCustomers,
  getBestCategories,
  getBestBrands,
  getBestProducts,
  getTotalSales,
  getTodaysSales,
  getRevenueChart,
  getBestSellingProducts,
  getRecentOrders
} from "./dashboardOverview.controller";

const router = Router();

router.get("/total-customers", getTotalCustomers);
router.get("/best-categories", getBestCategories);
router.get("/best-brands", getBestBrands);
router.get("/best-products", getBestProducts);
router.get("/total-sales", getTotalSales);
router.get("/todays-sales", getTodaysSales);
router.get("/revenue-chart", getRevenueChart);
router.get("/best-selling-products", getBestSellingProducts);
router.get("/recent-orders", getRecentOrders);

export default router; 