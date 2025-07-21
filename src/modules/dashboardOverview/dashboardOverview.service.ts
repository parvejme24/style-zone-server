import { DashboardOverviewModel } from "./dashboardOverview.model";

export const DashboardOverviewService = {
  getTotalCustomers: () => DashboardOverviewModel.getTotalCustomers(),
  getBestCategories: () => DashboardOverviewModel.getBestCategories(),
  getBestBrands: () => DashboardOverviewModel.getBestBrands(),
  getBestProducts: () => DashboardOverviewModel.getBestProducts(),
  getTotalSales: () => DashboardOverviewModel.getTotalSales(),
  getTodaysSales: () => DashboardOverviewModel.getTodaysSales(),
  getRevenueChart: (params: any) => DashboardOverviewModel.getRevenueChart(params),
  getBestSellingProducts: () => DashboardOverviewModel.getBestSellingProducts(),
  getRecentOrders: (filter: any) => DashboardOverviewModel.getRecentOrders(filter),
}; 