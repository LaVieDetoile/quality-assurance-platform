export default {
  testDir: './tests/ui',
  use: { baseURL: 'http://127.0.0.1:3000', trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  webServer: { command: 'npm start', url: 'http://127.0.0.1:3000', reuseExistingServer: !process.env.CI },
  reporter: [['html', { outputFolder: 'reports/playwright-report', open: 'never' }], ['list']],
};
