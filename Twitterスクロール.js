//動きます。

const puppeteer = require('puppeteer');
const delay = require('delay');

/**
 * メインロジック.
 */
(async () => {
  // Puppeteerの起動.
  const browser = await puppeteer.launch({
    headless: false, // Headlessモードで起動するかどうか.
    slowMo: 50, // 指定のミリ秒スローモーションで実行する.
  });

  // 新しい空のページを開く.
  const page = await browser.newPage();

  // view portの設定.
  await page.setViewport({
    width: 1200,
    height: 800,
  });

  await page.goto('https://twitter.com/nogizaka46/media');

  await page.click('.emphasize');

  // 1ミリ秒ごとに1ピクセルづつじりじりと下にスクロール.
  do {
    delay(1);
    await page.evaluate(() => window.scrollBy(0, 1)); // window.scrollBy(水平方向への移動ピクセル数, 垂直方向への移動ピクセル数)
  } while (true);

  // ブラウザの終了.
  // await browser.close();
})();