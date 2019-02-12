const test = require('ava')
const puppeteer = require('puppeteer')

test('指定のidが存在するかチェック', async (t) => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 800 })

    await page.goto('https://www.google.co.jp/')

///---修正---///    const text = await page.evaluate(() => document.querySelector('#lst-ib').textContent)
    const text = await page.evaluate(() => document.querySelector('input[name=q]').textContent)

    t.deepEqual(text, '')
})