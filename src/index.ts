
type CostItem = {
  service: string;
  cost: number;
};

async function fetchCosts(): Promise<CostItem[]> {
  // mock API for now
  return [
    { service: "Lambda", cost: 120 },
    { service: "SQS", cost: 40 },
    { service: "ALB", cost: 75 },
  ];
}

function detectAnomalies(costs: CostItem[]): CostItem[] {
  const threshold = 100;
  return costs.filter(c => c.cost > threshold);
}

async function main() {
  const costs = await fetchCosts();
  const anomalies = detectAnomalies(costs);

  console.log("All costs:", costs);
  console.log("Anomalies:", anomalies);
}

main();
