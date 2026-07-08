import { expect, test } from '@playwright/test';

test('home page smoke check', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'QA Quality Gates Demo' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Run checks' })).toBeVisible();
});
