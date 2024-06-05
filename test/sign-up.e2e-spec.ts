import { expect, test } from '@playwright/test'

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})

test('sign-up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Roger')
  await page.getByLabel('Seu celular').fill('44 9999-8888')
  await page.getByLabel('Seu e-mail').fill('rogerrm@test.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Estabelecimento criado!')

  await expect(toast).toBeVisible()
})

test('sign-up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('Roger')
  await page.getByLabel('Seu celular').fill('44 9999-8888')
  await page.getByLabel('Seu e-mail').fill('rogerrm@test.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar o estabelecimento')

  await expect(toast).toBeVisible()
})
