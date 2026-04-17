export type ServiceCost = {
  service: string;
  amount: number;
  currency: string;
  periodStart: string;
  periodEnd: string;
};

export type CostAnomaly = {
  service: string;
  currentAmount: number;
  thresholdAmount: number;
  reason: string;
};

export interface CostProvider {
  getServiceCosts(): Promise<ServiceCost[]>;
}
