# MirAI

## How to start?
1. Run method:
``
npm install
``
2. Then run this method:
``
npm run init
``
3. Use this code.
```sh
const MirAI = require('./src');

const config = {
  "site" : "http://budzetalert.pl",
  "wanted_file": "robots.txt",
  "sizeSitemap": 1,
  "max_size_folder": 4194304000,
  max_screenshots: 1,
  "chunkSize": 50,
  "strategy": {
    "typeStrategy" : "random",
    "pickLink": 3
  }
};

function run() {
  new MirAI(config);
}

run();
```
4. enjoy

## Configuration:
  - Site: **Require**. The Site, which crawler should be taken a link.
  - wanted_file: **Require**. The file where link to sitemap is include.
  - sizeSiteMap: **Optional** When sitemap have a include another sitemap, then use sizeSiteMap to decide how deep crawler running. Default is max.
  - max_screenshots: **Optional** How many screenshots make. Default is max.
  - max_size_folders: **Optional** How many bytes ScreenMaker able to save in folder. Default is 500MB.
  - cache: **Optional** Use JSON Database to load links. Default is true. When you set flag false, then each loops MirraI init command:
    - Init Crawler
    - Make Strategy (if doesn't exist)
    - Build Chunks
    - Pick Links in each chunks.
  - chunkSize: **Optional**. Maximum amount links in one chunk. Default number is generate.
  - strategy: **Optional**. Wchich strategy program have to use. Default is generate.
    - typeStrategy - How a Picker have to take pick links. Default is generate.
    - pickLink - How much links pick in one chunk. Default is generate. **The field pickLink doesnt allowed to bigger than length chunk**
 
 ## Troublingshooting
 
```
WrongTypeFieldException!!!
```
You have to correct type in field :).

```
SitemapDoesntExistException!!!
```
Probably, name files when you wrote in config is doesn't exist or crawler didn't found link to sitemap.

```
TooLengthException!!!
```
The value in sitemap is bigger as reality length links to sitemaps. You have to pick a number in 7 to max, which you can pick in console ---> ``Size sitemaps: 1``

```
NotFoundSiteException!!!
```
Site is doesnt exist :). Check is name site is corectly.

```
RequiredFieldException
```
Some fields is require. You have to fill it.






  
