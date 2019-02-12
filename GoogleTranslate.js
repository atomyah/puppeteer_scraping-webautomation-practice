//修正必要。///---修正---//の行。また、長い文章だと普通に画面を使ったほうが全然早いｗ

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

  await page.goto('https://translate.google.co.jp/?hl=ja');

  // 検索窓のテキストエリアに「Puppeteer」を入力
  ///---修正---// await page.type('textarea[name=text]', 'Puppeteer');
  await page.type('textarea[id=source]', 'I haven’t been here in so long because over the years I was functional. But At almost 6 years out i am in full Blown withdrawal. I was sick Jan 10th and I took a z-pack, my friend passed away in December, and this past week I drank a few cups of green tea. And now all of my symptoms are back. The worst one is when laying down my heart starts racing nonstop anxiety with no let up. I haven’t slept in 5 days I’m scared and I need help. ');
  await delay(1000);

  ///---修正---// const 日本語 = await page.evaluate(() => document.querySelector('span[id=result_box]').textContent);
  const 日本語 = await page.evaluate(() => document.querySelector('span.tlid-translation.translation').textContent);
  console.log(日本語);

  // ブラウザを終了.
  await browser.close();
})();