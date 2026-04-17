import { config } from "./config";
import { detectThresholdAnomalies } from "./detectors/threshold";
import { MockCostProvider } from "./providers/mock";

export async function handler(): Promise<{
  costs: unknown[];
  anomalies: unknown[];
}> {
  const provider = new MockCostProvider();
  const costs = await provider.getServiceCosts();
  const anomalies = detectThresholdAnomalies(costs, config.thresholdAmount);

  return { costs, anomalies };
}
