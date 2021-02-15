# 📰 Inshorts News API

#### An Unofficial API for inshorts news platform. This version uses web-scraping to get news articles from inshorts.com. For a better, faster API checkout v2 of this API [here.](https://github.com/sumitkolhe/inshorts-api-v2) 

---

## :card_file_box: News Categories

This API supports category wise news. Here is a complete list of all categories.

1. all
2. national // indian News only
3. business
4. sports
5. world
6. politics
7. technology
8. startup
9. entertainment
10. science
11. automobile

# :mag: Usage

You can use either of the categories from [News Categories](#card_file_box-news-categories)

**Base endpoint :** `https://inshorts.vercel.app/news`

Make a `GET`request to the **Base endpoint** with the name of the category to get the corresponding news in JSON format

```
https://inshortsv2.vercel.app/news?category={category name}
```

**Example** - https://inshorts.vercel.app/news?type=technology


---

#### # Response Format

The response JSON Object looks something like this -

```JSON
{
  "category": "technology",
  "total": 2,
  "articles": [
    {
      "title": "      11th Gen processor, Iris Xe graphics give intelligent performance: Intel    ",
      "description": "Intel introduced the 11th Gen Intel Core processor with Intel Iris Xe graphics which aims to deliver intelligent performance that revolutionizes creative workflows, enabling amazing new photo and video editing capabilities at incredible speeds. With up to 2.7x faster content creation, it strives to make creating content and visuals more wonderful and helps you get things done wherever you are.",
      "author": "Roshan Gupta",
      "inshorts_link": "https://inshorts.com/en/news/11th-gen-processor-iris-xe-graphics-give-intelligent-performance-intel-1613371826082",
      "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/15_mon/img_1613364654995_213.jpg?",
      "timestamp": "2021-02-15T06:50:26.000Z",
      "read_more": "https://inshorts.com/safe_redirect?url=https://www.amazon.in/stores/page/2F859F93-DB64-404A-9838-33E2CEBDF376?ingress=3&visitId=04ddd782-946b-4d1f-8215-96455f13a693&channel=km2021q1Considerationdisplay&inshorts_open_externally=true "
    },
    {
      "title": "      Only if necessary: Musk to man who suggested him to develop 'ElonCoin'    ",
      "description": "World's richest man Elon Musk on Monday responded to a man who suggested him to develop a new cryptocurrency called 'ElonCoin'. Develop a new ElonCoin, offer them to the existing non-major Dogecoin holders to void their wallet, the man had tweeted. Allocate your time and support to make the ElonCoin the currency of the Earth, the man tweeted to Musk.",
      "author": "Pragya Swastik",
      "inshorts_link": "https://inshorts.com/en/news/only-if-necessary-musk-to-man-who-suggested-him-to-develop-eloncoin-1613392800342",
      "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/15_mon/img_1613390973651_68.jpg?",
      "timestamp": "2021-02-15T12:40:00.000Z",
      "read_more": "https://twitter.com/elonmusk/status/1361262357205442562?s=20&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "
    }
  ]
}
```

---

## :construction_worker: Local development

### Prerequisites

- NodeJS v10+
- Vercel CLI : To install Vercel CLI globally use `npm i -g vercel`

### Run locally

- Clone the Repo

  ```
  $ git clone https://github.com/sumitkolhe/inshorts-api

  $ cd inshorts-api
  ```

- Install the dependencies

  ```
  npm install
  ```

- Start development server

  ```
  npm start
  ```

- Deploy to your vercel account

  ```
  npm run deploy
  ```

# :rocket: Deploy to Vercel

**You can directly deploy this repo to your Vercel account by clicking the button below.**
<br>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/sumitkolhe/inshorts-api)