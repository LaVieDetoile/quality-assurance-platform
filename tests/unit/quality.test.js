import { describe, expect, it } from 'vitest';
import { meetsQualityGate, passRate } from '../../src/quality.js';

describe('quality gate utilities', () => {
  it('calculates pass rate', () => expect(passRate(9, 10)).toBe(90));
  it('requires all quality checks to pass', () =>
    expect(meetsQualityGate({ unitPassed: true, apiPassed: true, uiPassed: true })).toBe(true));
});
