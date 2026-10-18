
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 4000
  },

  reporter: 'html',
  
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    headless: false,
    actionTimeout: 15 * 1000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
 
  ],


});

