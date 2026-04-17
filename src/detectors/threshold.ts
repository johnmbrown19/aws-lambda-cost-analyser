import type { CostAnomaly, ServiceCost } from "../types";

export function detectThresholdAnomalies(
  serviceCosts: ServiceCost[],
  thresholdAmount: number
): CostAnomaly[] {
  return serviceCosts
    .filter((item) => item.amount > thresholdAmount)
    .map((item) => ({
      service: item.service,
      currentAmount: item.amount,
      thresholdAmount,
      reason: `Current cost ${item.amount} exceeds threshold ${thresholdAmount}`
    }));
}
