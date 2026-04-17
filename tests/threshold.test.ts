import { detectThresholdAnomalies } from "../src/detectors/threshold";

describe("detectThresholdAnomalies", () => {
  it("flags services above the threshold", () => {
    const input = [
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
      }
    ];

    const result = detectThresholdAnomalies(input, 100);

    expect(result).toHaveLength(1);
    expect(result[0]?.service).toBe("Lambda");
  });

  it("returns no anomalies when nothing exceeds the threshold", () => {
    const input = [
      {
        service: "ALB",
        amount: 75,
        currency: "USD",
        periodStart: "2026-04-01",
        periodEnd: "2026-04-02"
      }
    ];

    const result = detectThresholdAnomalies(input, 100);

    expect(result).toEqual([]);
  });
});
