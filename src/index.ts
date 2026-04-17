import { config } from "./config";
import { detectThresholdAnomalies } from "./detectors/threshold";
import { MockCostProvider } from "./providers/mock";

async function main(): Promise<void> {
  const provider = new MockCostProvider();
  const costs = await provider.getServiceCosts();
  const anomalies = detectThresholdAnomalies(costs, config.thresholdAmount);

  if (config.outputJson) {
    console.log(JSON.stringify({ costs, anomalies }, null, 2));
  } else {
    console.log("Service costs:");
    for (const cost of costs) {
      console.log(`- ${cost.service}: ${cost.amount} ${cost.currency}`);
    }

    console.log("\nAnomalies:");
    if (anomalies.length === 0) {
      console.log("- none");
    } else {
      for (const anomaly of anomalies) {
        console.log(`- ${anomaly.service}: ${anomaly.reason}`);
      }
    }
  }

  if (anomalies.length > 0) {
    process.exitCode = 2;
  }
}

main().catch((error: unknown) => {
  console.error("Application failed:", error);
  process.exit(1);
});
