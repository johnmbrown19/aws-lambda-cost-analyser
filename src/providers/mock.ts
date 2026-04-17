import type { CostProvider, ServiceCost } from "../types";

export class MockCostProvider implements CostProvider {
  async getServiceCosts(): Promise<ServiceCost[]> {
    return [
      {
        service: "Lambda",
        amount: 120,
        currency: "USD",
        periodStart: "2026-04-01",
        periodEnd: "2026-04-02"
      },
      {
        service: "SQS",
        amount: 40,
        currency: "USD",
        periodStart: "2026-04-01",
        periodEnd: "2026-04-02"
      },
      {
        service: "ALB",
        amount: 75,
        currency: "USD",
        periodStart: "2026-04-01",
        periodEnd: "2026-04-02"
      }
    ];
  }
}
