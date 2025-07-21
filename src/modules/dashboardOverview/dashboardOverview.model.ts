import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

export const DashboardOverviewModel = {
  getTotalCustomers: async () => {
    return prisma.user.count();
  },
  getBestCategories: async () => {
    // Example: categories ordered by total sales
    return prisma.category.findMany({
      orderBy: { products: { _count: "desc" } },
      include: { products: true },
    });
  },
  getBestBrands: async () => {
    // Example: brands ordered by total sales
    return prisma.brand.findMany({
      orderBy: { products: { _count: "desc" } },
      include: { products: true },
    });
  },
  getBestProducts: async () => {
    // Example: products ordered by total_sales
    return prisma.product.findMany({
      orderBy: { total_sales: "desc" },
      take: 10,
    });
  },
  getTotalSales: async () => {
    // Example: sum of all product sales
    const result = await prisma.product.aggregate({
      _sum: { total_sales: true },
    });
    return result._sum.total_sales || 0;
  },
  getTodaysSales: async () => {
    // Example: sum of today's orders (implement your own logic)
    // Placeholder: return 0
    return 0;
  },
  getRevenueChart: async (params: any) => {
    // Implement logic for different date ranges
    return [];
  },
  getBestSellingProducts: async () => {
    return prisma.product.findMany({
      orderBy: { total_sales: "desc" },
      take: 5,
    });
  },
  getRecentOrders: async (filter: any) => {
    // Example: filter by status
    return prisma.order.findMany({
      where: filter,
      orderBy: { createdAt: "desc" },
      take: 10,
    });
  },
}; 