//動きます。
/*
// 検索窓のテキストボックスに「東京都中央区'」を入力
  await page.type('input[name=q]', '東京都中央区'');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'load' }),
    page.click('#searchbox-searchbutton'),
  ]);
*/

/*
// 画面キャプチャ
  await delay(5000); // スクレイピングする際にはアクセス間隔を５秒あけないと、前のページか遷移中のページをキャプチャしてしまう。もっといい方法ないかな？
  await page.screenshot({ path: 'fullpage.png', fullpage: true })
*/

const puppeteer = require('puppeteer');
const delay = require('delay');

//windowObj.maximize();

/**
 * メインロジック.
 */
(async () => {
      // Puppeteerの起動.
      const browser = await puppeteer.launch({
            headless: false, // Headlessモードで起動するかどうか.
            slowMo: 50, // 指定のミリ秒スローモーションで実行する.
            args:['--start-maximized'],
      });
      


      // 新しい空のページを開く.
      const page = await browser.newPage();

      // view portの設定.
      await page.setViewport({
            width: 3840,
            height: 1920,
      });

      await page.goto('https://map.google.co.jp/');

      // await page.screenshot({ path: 'fullpage.png', fullPage: true });

      await page.type('input[name=q]', '東京都中央区八重洲');
      await Promise.all([
        console.log('----------------------------------------inside Promise.all'),
        page.waitForNavigation({ waitUntil: 'load' }),
        page.click('#searchbox-searchbutton'),
      ]);

      console.log('----------------------------------------outed Promise.all')
      await delay(5000); // スクレイピングする際にはアクセス間隔を1秒あける.

      // 画面キャプチャ
      page.screenshot({ path: 'fullpage.png', fullpage: true })       
      console.log('----------------------------------------screenshot captured!')

      // ブラウザを終了.
      // await browser.close();
})();