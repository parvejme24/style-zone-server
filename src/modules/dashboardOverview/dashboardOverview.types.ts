export interface RevenueChartParams {
  range: "today" | "day" | "year" | "sixMonth" | "custom";
  startDate?: string;
  endDate?: string;
}

export interface CategoryStat {
  id: string;
  name: string;
  totalSales: number;
}

export interface BrandStat {
  id: string;
  name: string;
  totalSales: number;
}

export interface ProductStat {
  id: string;
  name: string;
  totalSales: number;
}

export interface OrderStat {
  id: string;
  status: string;
  total: number;
  createdAt: string;
} 