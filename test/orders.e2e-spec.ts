import { expect, test } from '@playwright/test'

test('lists orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.waitForTimeout(3000)

  await expect(
    page.getByRole('cell', { name: 'customer-1', exact: true }),
  ).toBeVisible()

  await expect(page.getByRole('cell', { name: 'customer-10' })).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.waitForTimeout(3000)

  // TESTANDO BOTÕES //
  // PROXIMA PÁGINA //
  await page.getByRole('button', { name: 'Próxima página' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-11', exact: true }),
  ).toBeVisible()

  await expect(page.getByRole('cell', { name: 'customer-20' })).toBeVisible()

  // ÚLTIMA PÁGINA //
  await page.getByRole('button', { name: 'Última página' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-51', exact: true }),
  ).toBeVisible()

  await expect(page.getByRole('cell', { name: 'customer-60' })).toBeVisible()

  // PÁGINA ANTERIOR //
  await page.getByRole('button', { name: 'Página Anterior' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-41', exact: true }),
  ).toBeVisible()

  await expect(page.getByRole('cell', { name: 'customer-50' })).toBeVisible()

  // PRIMEIRA PÁGINA //
  await page.getByRole('button', { name: 'Primeira página' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-1', exact: true }),
  ).toBeVisible()

  await expect(page.getByRole('cell', { name: 'customer-10' })).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.waitForTimeout(3000)

  await page.getByPlaceholder('ID do pedido').fill('order-11')

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-11', exact: true }),
  ).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.waitForTimeout(3000)

  await page.getByPlaceholder('Nome do cliente').fill('customer-11')

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-11', exact: true }),
  ).toBeVisible()
})

test('filter by status ', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.waitForTimeout(3000)

  await page.getByRole('combobox').click()
  await page.getByLabel('Pendente').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  const tableRows = await page.getByRole('cell', { name: 'Pendente' })

  await expect(tableRows).toHaveCount(10)
})
