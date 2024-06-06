import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.waitForTimeout(2500)

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.waitForTimeout(2500)

  expect(page.getByText('100')).toBeVisible()
  expect(page.getByText('-1% em relação a mês passado')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.waitForTimeout(2500)

  expect(page.getByText('200')).toBeVisible()
  expect(page.getByText('+7% em relação a mês passado')).toBeVisible()
})

test('display month orders revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.waitForTimeout(2500)

  expect(page.getByText('R$ 205,00')).toBeVisible()
  expect(page.getByText('+10% em relação a mês passado')).toBeVisible()
})
