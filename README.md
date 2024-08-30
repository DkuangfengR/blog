## 🚀Hello There

<hr />

[简体中文](/doc/zh.md)

DevNow is a minimal open source tech blog project template, support Vercel one-click deployment, support comments, search, etc., welcome everyone to experience.

## [🔗 Demo](https://devnow.laughingzhu.cn/) ： <https://devnow.laughingzhu.cn/>

<div align="center">

<img src="https://r2.laughingzhu.cn/72853b50f2bfc17fbf7d3341d79b7e4f-df75d4.webp" alt="Screenshot" />

<hr/>

<h3 align="center">
 ⭐ Leave a star if you like this project! ⭐️
</h3>

[![用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/LaughingZhu/DevNow)

</div>

## 📌 Features

<hr />

- ✅ Mobile responsive
- ✅ SEO & OpenGraph
- ✅ Markdown & MDX support
- ✅ Syntax highlighting
- ✅ Image optimization
- ✅ Dark mode
- ✅ Copy code block
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Reading Time
- ✅ 📝 Draft mode
- ✅ 🔍 Seach by Algolia
- ✅ Comments by Giscus
- ✅ Pagination
- ✅ Headless CMS by 🦙 Tina CMS

## ⚙️ Stack

<hr />

- [**ASTRO** + **Typescript**](https://astro.build/) - Astro is the all-in-one web framework designed for speed.
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com/) - Tailwind CSS is a utility-first CSS framework.
- [**Search Library**](https://docsearch.algolia.com/docs/what-is-docsearch) - Search library integration.
- [**Tina CMS**](https://tina.io/) - CMS.

## 👨🏻‍💻 Running Locally

<hr />

1. Clone or [fork](https://github.com/danielcgilibert/blog-template/fork) the repository:

```bash
git@github.com:LaughingZhu/DevNow.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

1. build production

```bash
pnpm build
```

## 📐 Vercel env config

<hr />

[Here](https://vercel.com/docs/projects/environment-variables) env config

```js
// doc seach config
PUBLIC_SEARCH_APP_ID;
PUBLIC_SEARCH_API_KEY;

// Giscus comment config
PUBLIC_GISCUS_REPO_ID;
PUBLIC_GISCUS_REPO;

// Google analytics config
PUBLIC_GOOGLE_ANALYTICS_ID;

// Sentry config
PUBLIC_SENTRY_DNS;
PUBLIC_SENTRY_TOKEN;
```

> 📢 Notice：
>
> **Giscus** 和 **DocSearch** feature need open status in config/index
>
> if you are private deployment, you need to update these environment variables in.env; if you are public deployment, you need to update these environment variables in Vercel config env，[vercel env address](<[URL_ADDRESS](https://vercel.com/docs/projects/environment-variables)>)

## Comment config : [Giscus](https://giscus.app/zh-CN)

<hr />

1. Status
   src/config --> giscus: true

2. Env config

- Private project:
  .env --> **PUBLIC_GISCUS_REPO_ID、PUBLIC_GISCUS_REPO、和 PUBLIC_GISCUS_CATEGORY_ID**

- Public project: Vercel config env，[vercel env address](https://vercel.com/docs/projects/environment-variables)

## Search config: [DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch)

<hr />

1. Status
   src/config --> search: true

2. Env config

- Private project: .env --> **PUBLIC_SEARCH_APP_ID、PUBLIC_SEARCH_API_KEY**
- Public project: Vercel config env，[vercel env address](https://vercel.com/docs/projects/environment-variables)

## Headless CMS by Tina CMS

<hr />

[Tina CMS](https://www.laughingzhu.cn/posts/tina-cms)

## 🗂️ Adding a catefory

<hr />

To add a new category to your blog, simply go to the src/data/categories.ts file and add it to the array.

Example:

```ts
export const categories: Category[] = [
  {
    title: 'Tech',
    slug: 'tech',
    color: 'blue',
    description:
      'tech category'
  },
  { new category here } <---
]
```

## Sponsors

<hr />
<img src='https://r2.laughingzhu.cn/11a4546cbebfb285c418aa0a60080434-2c9ce1.webp' alt='Sponsors' />

## sponsor me by wechat or alipay

<hr />

<div align="center">
<img src="https://r2.laughingzhu.cn/8df0d597-93dc-44a4-9e93-ebd02f74e695.JPG" alt="Buy Me A Coffee" width="174" />

<img src="https://r2.laughingzhu.cn/c88193fc-14ea-4236-a3f8-13b6ef736182.JPG" alt="Buy Me A Coffee" width="174" />
</div>

## Star History

<hr />

[![Star History Chart](https://api.star-history.com/svg?repos=laughingzhu/devnow&type=Date)](https://star-history.com/#laughingzhu/devnow&Date)
