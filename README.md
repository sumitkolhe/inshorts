# 📰 Inshorts News API [UNOFFICIAL]

---

#### This is an Unofficial API for inshorts news platform. You can fetch news from multiple different sources as gathered by the inshorts platform.

---

## :card_file_box: News Categories

This API supports category wise news. Here is a complete list of all categories.

1. all
2. national //Indian News only
3. business
4. sports
5. world
6. politics
7. technology
8. startup
9. entertainment
10. science
11. automobile


#### You can also check the API endpoints here https://inshorts.vercel.app
---

## Usage

Make a get to the required API endpoint to get the corresponding news in JSON format
```
https://inshorts.vercel.app/{category}
```
Example - https://inshorts.vercel.app/science

---

### Response Format

The response JSON Object looks something like this - 

```JSON
{
  "category": "all",
  "total": 25,
  "articles": [
    {
      "title": "      India's Zydus Cadila gets approval from Mexico to test potential COVID-19 drug    ",
      "description": "Ahmedabad-based Zydus Cadila said it has received approval from Mexico's regulatory authority COFEPRIS to test its research candidate Desidustat in the management of COVID-19 patients. Zydus will conduct a study to evaluate the drug's efficacy and safety. It said that 100 mg Desidustat tablets will be administered for a period of 14 days alongside recommended standard care during the trial.",
      "author": "Dharna",
      "inshorts_link": "https://inshorts.com/en/news/indias-zydus-cadila-gets-approval-from-mexico-to-test-potential-covid19-drug-1594020666487",
      "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/07_jul/6_mon/img_1594016494612_66.jpg?",
      "timestamp": "2020-07-06T07:31:06.000Z",
      "read_more": "https://www.indiatvnews.com/amp/business/news-zydus-cadila-covid-19-drug-desidustat-tablets-testing-mexican-authority-cofepris-631995?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "
    },
    {
      "title": "      WHO team to visit China next week to probe origins of coronavirus    ",
      "description": "A WHO team will visit China next week to investigate the origins of the coronavirus and its spread to human beings, Dr Soumya Swaminathan, Chief Scientist, WHO said. Studies in South-East Asia show bats have lots of coronaviruses...There are also previous studies showing populations in southern China and other South-East Asian countries have antibodies to coronaviruses, she added.",
      "author": "Nandini Sinha",
      "inshorts_link": "https://inshorts.com/en/news/who-team-to-visit-china-next-week-to-probe-origins-of-coronavirus-1593869550189",
      "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/07_jul/4_sat/img_1593865807516_20.jpg?",
      "timestamp": "2020-07-04T13:32:30.000Z",
      "read_more": "https://www.aninews.in/news/national/general-news/who-team-to-visit-china-next-week-to-investigate-origins-of-coronavirus20200704105445/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "
    }
  ]
}
```
---
## :construction_worker: Setup 

This API is created as a collection of multiple different serverless functions that are specifically made to be hosted on **Vercel**. You can modify the code to work with **Node based servers** or as **AWS Lambda functions**

#### Run locally
* You will need Vercel CLI to run this locally. 
```
npm i -g vercel
```
* Login into vercel CLI by following documentation here https://vercel.com/docs/cli#commands/login

* Clone the Repo
```
$ git clone https://github.com/sumitkolhe/Inshorts-news-api
$ cd Inshorts-news-api
```

* Install the dependencies
```
npm install
```

* Run the API 
```
vercel dev
```

> NOTE: **You will need to deploy the project to Vercel first to even run it locally. The Vercel CLI wil guide you through the process**
---

## :rocket: Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/vercel/tree/master/examples/gatsby)
