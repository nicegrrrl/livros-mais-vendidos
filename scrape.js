import puppeteer from "puppeteer";

const scrapeProducts = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.amazon.com.br/gp/bestsellers/books/");

  const products = await page.evaluate(() => {
    let results = [];
    const items = document.querySelectorAll("#gridItemRoot");

    items.forEach((item) => {
      const title = item.querySelector(".a-link-normal > span > div");
      const price = item.querySelector("._cDEzb_p13n-sc-price_3mJ9Z");
      results.push({
        title: title.innerText,
        price: price.innerText,
      });
    });

    const theFirstThree = results.slice(0, 3);
    return theFirstThree;
  });

  console.log(products);

  await browser.close();
};

console.log("scraping...");
scrapeProducts();
