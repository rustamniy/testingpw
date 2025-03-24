import{test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')


})

test('the first test', async ({page}) => {
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
    
})

