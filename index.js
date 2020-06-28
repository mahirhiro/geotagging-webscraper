const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
});
const page = await browser.newPage();
const website = 'http://geocoder.ca';
var long = [];
var lat = [];
var array = ['4-248 Manitoba St Bracebridge ON P1L 2E1',
'110 Little Ave Barrie ON L4N 4K8',
'705-175 Hanes Rd Huntsville ON P1H 1M4',
'661 Atherley Rd Orillia ON L3V 1P1',
'7 Balsam Street Collingwood ON L9Y 5H6',
'490 Bayfield St Barrie ON L4M 5A2',
'201 Fairview Rd Barrie ON L4N 9B1',
'11-649 Yonge St Barrie ON L4N 4E7',
'143 Mapleview Dr W Barrie ON L4N 9H7',
'F005-509 Bayfield St Barrie ON L4M 4Z8',
'9271 County Road 93 Midland ON L4R 4K4',
'3315 Monarch Dr Orillia ON L3V 7Z4',
'577 Holland St W Bradford ON L3Z 0C1',
'5A-477 Grove St E Barrie ON L4M 6M3',
'202 Jane Street Stayner ON L0M 1S0',
'1040 Juddhaven Rd Minett ON P0B 1G0',
'1112 Juddhaven Rd Minett ON P0B 1G0',
'6-126 Bridge Street Bradford ON L3Z 3H2',
'28 Mississaga Street E Orillia ON L3V 1V5',
'1-34 Yonge Street S Elmvale ON L0L 1P0',
'1020 Muskoka Road 169 Gravenhurst ON P1P 1R2',
'1164 Ewart Street Innisfil ON L0L 1C0',
'216-80 Bradford Street Barrie ON L4N 6S7',
'3401 County Rd 42 Creemore ON L0M 1G0',
'1-235 Sunseeker Avenue Innisfil ON',
'1-18 Cundles St E Barrie ON L4M 2Z5',
'22-149 Welham Rd Barrie ON L4N 8Y3',
'B2-561 Bryne Dr Barrie ON L4N 9Y3',
'23 Brentwood Rd Angus ON L0M 1B2',
'201 Hurst Drive Barrie ON L4N 8K8',
'2-34 Yonge Street S Elmvale ON L0L 1P0',
'2240 Highway S Oro-Medonte ON L0L 2L0',
'4002 County Rd 124 Nottawa ON L0M 1P0',
'62 Dunlop St W Barrie ON L4N 1A3',
'826 Mosley Street Wasaga Beach ON L9Z 2H4',
'500 University Ave Orillia ON L3V 0B9',
'500 University Ave Orillia ON L3V 0B9',
'8 Owen Street Penetanguishene ON L9M 1M8',
'B-48 Pine Street L9Y 2A7',
'12 Manitoba Street Bracebridge ON P1L 1R9',
'137 Hurontario St Collingwood ON L9Y 2L9',
'F-41 Beach Dr Wasaga Beach L9Z 1N1',
'141 Brock St Gravenhurst ON P1P 1V5',
'178 Mississaga St E Orillia ON L3V 1V9',
'3129 Muskoka Road 169, Bala ON',
'1008 Maple St Bala ON P0C 1A0',
'1014 Grey Street Bala ON P0C 1A0',
'105 Douglas St Orillia ON L3V 5Y8',
'6 Reinbird St Coldwater ON L0K 1E0',
'1354 Innisfil Beach Road Innisfil ON L9S 4B7',
'7-8-1441 Mosley St Wasaga Beach ON L9Z 2B9',
'107-827 Big Bay Point Rd Barrie ON L4N 0G5',
'38 Holland Street W Bradford ON L3Z 2B6',
'6-490 Mapleview Dr W Barrie ON L4N 6C3',
'1C-50 King St S Alliston ON L9R 1H6',
'741 Yonge St Midland ON L4R 2E1',
'1-290 Hurontario Street Collingwood ON L9Y 2M3',
'100 Dissette Street Bradford ON L3Z 3G8',
'5-353 Anne Street N Barrie ON L4N 7Z9',
'28 Dunlop St E Barrie ON L4M 1A3',
'A-355 Bethune Drive Gravenhurst ON P1P 1R3',
'2-31 King St Barrie ON L4N 6B5',
'3119 Highway 169 Bala ON P0C 1A0',
'4203 County Road 124 Nottawa ON L0M 1P0',
'C1-535 Bryne Dr Barrie ON L4N 9P6',
'4004 Horseshoe Valley Rd W Minesing ON L0L 1Y0',
'233 King Street Midland ON L4R 3M1',
'229 King St Midland ON L4R 3M1',
'70 Essa Rd Barrie ON L4N 3K7',
'8-221 Cundles Rd E Barrie ON L4M 6L5',
'D5-636 Yonge St Barrie ON L4N 4E6',
'201 Georgian Dr Barrie ON L4M 6M2',
'6635 County Rd 56 Egbert ON L0L 1N0',
'6635 County Rd 56 Egbert ON L0L 1N0',
'6635 County Rd 56 Egbert ON L0L 1N0',
'6635 County Rd 56 Egbert ON L0L 1N0',
'750 Atherley Road Orillia ON L3V 1P6',
'4904 County Rd 90 Barrie ON L4M 4S4',
'476 South Mary Lake Rd Port Sydney ON P0B 1L0',
'2632 Vespra Valley Road Barrie ON L4M 4S9',
'1-55 Front Street S Orillia ON L3V 4S2',
'551 Bay St Midland ON L4R 1L4',
'60 Hurontario St Collingwood ON L9Y 2L7',
'8994 County Road 9 Clearview ON L0M 1G0',
'A-445 Dunlop St W Barrie ON L4N 1C3',
'453 Dunlop St W Barrie ON L4N 1C3',
'59 Dunlop St E Barrie ON L4M 1A2',
'20 Dunlop St E Barrie ON L4M 1A3',
'8987 County Rd 91 Duntroon ON L0M 1H0',
'9025 County Rd 91 Duntroon ON L0M 1H0',
'1226 Concession Road 10 S Duntroon ON L0M 1H0',
'15 Holland St E Bradford ON L3Z 2B3',
'2-7296 Hwy 26 Stayner ON L0M 1S0',
'1012 Dwight Beach Road Dwight ON P0A 1H0',
'2836 Highway 60 Dwight ON P0A 1H0',
'2836 Highway 60 Dwight ON P0A 1H0',
'14 George St Elmvale Lol 1P0 ON',
'32 Queen St W Elmvale ON L0L 1P0',
'14 George St Elmvale ON L0L 1P0',
'8B-110 Anne St S Barrie ON L4N 2E3'];


for (let index = 0; index < array.length; index++) {
    await page.goto(website);
    const location = array[index];
try {

  const searchBar = '.input-block-level';
  await page.waitForSelector(searchBar);
  await page.type(searchBar, location);

  const searchButton = '.btn.btn-large.btn-primary';
  await page.$eval(searchButton, el => el.click());


  await page.waitForXPath("/html/body/div[2]/table[2]/tbody/tr/td[2]/p/strong");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("/html/body/div[2]/table[2]/tbody/tr/td[2]/p/strong");
    let coordinates = await page.evaluate(el => el.textContent, elHandle[0]);

    var longNLat = coordinates.split(',');
    long[index] = longNLat[0];
    lat[index] = longNLat[1];
    if (index === 2){
      console.log(lat[1]);
    }
} catch (err) {
  console.log('OnError: caught!');
}
}

for (let index = 0; index < long.length; index++) {
  console.log('long', long[i]);
    console.log('lat', lat[i]);
}
})()