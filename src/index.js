"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchCosts() {
    // mock API for now
    return [
        { service: "Lambda", cost: 120 },
        { service: "SQS", cost: 40 },
        { service: "ALB", cost: 75 },
    ];
}
function detectAnomalies(costs) {
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
//# sourceMappingURL=index.js.map