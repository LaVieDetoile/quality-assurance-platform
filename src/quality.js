export function passRate(passed, total) {
  if (total === 0) return 0;
  return Number(((passed / total) * 100).toFixed(2));
}

export function meetsQualityGate({ unitPassed, apiPassed, uiPassed }) {
  return unitPassed && apiPassed && uiPassed;
}
