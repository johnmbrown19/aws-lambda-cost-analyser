export const config = {
  currency: process.env.CURRENCY ?? "USD",
  thresholdAmount: Number(process.env.THRESHOLD_AMOUNT ?? "100"),
  outputJson: process.env.OUTPUT_JSON === "true"
};
