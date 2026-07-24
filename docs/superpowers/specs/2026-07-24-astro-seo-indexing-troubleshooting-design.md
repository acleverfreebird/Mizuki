# Astro Blog Indexing Troubleshooting Article Design

## Goal

Write a practical troubleshooting article for Astro, Mizuki, and Fuwari blog users whose deployed posts do not appear in Google or Bing search results.

The article should help readers identify whether the problem is caused by page generation, deployment, robots.txt, sitemap output, canonical/meta directives, search-console discovery state, IndexNow expectations, or content/indexing quality.

## Recommended Article Metadata

```yaml
title: "Astro 博客文章不被收录怎么办？从页面、Sitemap 到 Search Console 的排查清单"
published: 2026-07-24
description: "面向 Astro、Mizuki、Fuwari 等静态博客的搜索引擎收录排查指南，按页面访问、robots.txt、sitemap、canonical、Search Console、Bing Webmaster Tools 和 IndexNow 逐步定位问题。"
tags: ["Astro", "SEO", "Search Console", "Bing", "Sitemap", "故障排查"]
category: "SEO优化"
draft: false
lang: "zh-CN"
```

## Audience

Primary readers:

- Personal blog owners using Astro-based static blogs.
- Mizuki or Fuwari users who can deploy successfully but cannot find new posts in search engines.
- Developers who need a checklist instead of a broad SEO theory article.

Assumed knowledge:

- Can run simple terminal commands.
- Can open deployed site URLs and deployment platform logs.
- Has basic access to Google Search Console or Bing Webmaster Tools, or is willing to set them up.

## Scope

In scope:

- Diagnose whether a post URL is reachable.
- Check production deployment state.
- Check robots.txt crawl permissions.
- Check sitemap inclusion and domain correctness.
- Check canonical URLs and noindex directives.
- Check Astro build output and deployment commands.
- Interpret common Google Search Console and Bing Webmaster Tools states.
- Explain why IndexNow submission does not guarantee indexing.
- Provide a final short checklist.

Out of scope:

- Full keyword research strategy.
- Backlink building.
- Long-form SEO theory.
- Pagefind implementation details, except a short note that site search and search-engine indexing are separate systems.
- Rewriting existing articles about IndexNow or general Bing SEO.

## Relationship To Existing Content

This article should complement existing posts instead of repeating them:

- Link to `src/content/posts/index_now/index.md` when mentioning IndexNow setup and API submission.
- Link to `src/content/posts/bing-seo-optimization-guide/index.md` when mentioning broader Bing SEO optimization.
- Mention Pagefind only as a separate local search index, because existing content already includes Pagefind references in the Astro deployment guide.

## Recommended Structure

### 1. 先判断是不是真的没收录

Explain the difference between:

- Searching for the post title.
- Searching `site:example.com 文章标题`.
- Searching the exact URL.
- Using Google Search Console URL Inspection.

Make clear that a new post not appearing immediately is not necessarily a fault.

### 2. 确认文章页面真的在线

Checks:

- Open the deployed URL directly.
- Confirm the response is not 404, 500, or redirected to the wrong domain.
- Confirm the production deployment has finished and uses the latest commit.

Example commands:

```bash
curl -I https://example.com/posts/my-post/
```

Expected useful signals:

- `200` means the page is reachable.
- `301` or `308` is acceptable only when it points to the intended canonical URL.
- `404` means search engines cannot index the page.

### 3. 检查 robots.txt 有没有挡住爬虫

Checks:

- Open `https://example.com/robots.txt`.
- Confirm article paths are not blocked.
- Confirm there is no accidental full-site block.

Bad examples to call out:

```txt
User-agent: *
Disallow: /
```

```txt
User-agent: *
Disallow: /posts/
```

### 4. 检查 sitemap 是否包含新文章

Checks:

- Open `/sitemap.xml` and any referenced sitemap files such as `/sitemap-0.xml`.
- Search for the new post URL.
- Confirm the domain and protocol are correct.

Astro-specific note:

- If Astro `site` or Mizuki `siteURL` is wrong, generated sitemap URLs can point to a stale domain, preview domain, or HTTP URL.

Example commands:

```bash
curl -L https://example.com/sitemap.xml
```

```bash
curl -L https://example.com/sitemap-0.xml | grep "my-post"
```

For Windows readers, provide a PowerShell alternative:

```powershell
(Invoke-WebRequest https://example.com/sitemap-0.xml).Content | Select-String "my-post"
```

### 5. 检查 canonical 和 noindex

Checks:

- View page source.
- Search for `canonical`.
- Search for `noindex`.

Problems to explain:

- Canonical points to an old domain.
- Canonical points to a preview domain.
- Canonical uses HTTP while the site is HTTPS.
- Page includes `noindex`, so search engines are explicitly told not to index it.

Example command:

```bash
curl -L https://example.com/posts/my-post/ | grep -Ei "canonical|noindex"
```

### 6. 检查构建产物和部署命令

Checks:

- Run local build.
- Confirm the post exists in `dist`.
- Confirm the deployment platform uses the correct package manager and build command.

Mizuki/Astro examples:

```bash
pnpm build
```

```powershell
Get-ChildItem -Recurse dist | Select-String "文章标题"
```

Notes:

- A local dev server showing the post does not prove that the static production build contains it.
- Draft posts should not be expected to appear in production.
- Pagefind index generation affects site search, not Google or Bing indexing.

### 7. 在搜索平台里看真实原因

Google Search Console states to mention:

- URL is not on Google.
- Discovered but not indexed.
- Crawled but not indexed.
- Duplicate, Google chose different canonical.
- Blocked by robots.txt.
- Excluded by noindex.

Bing Webmaster Tools states to mention:

- URL inspection result.
- Sitemap submission status.
- Crawl errors.

For each state, provide a practical next step instead of broad SEO advice.

### 8. IndexNow 推送成功但仍不收录怎么办

Core message:

- IndexNow only notifies search engines that a URL changed.
- It does not force indexing.
- A successful `200` or `202` response means submission was accepted, not that the URL is already searchable.

Recommended internal link:

- Link to the existing IndexNow article for setup details.

### 9. 常见问题速查表

Use a table with columns:

- 症状
- 最可能原因
- 检查位置
- 修复方式

Required rows:

- New post URL returns 404.
- Sitemap does not include the post.
- robots.txt blocks `/posts/`.
- Canonical points to an old domain.
- Search Console says discovered but not indexed.
- Bing receives IndexNow submission but search result still does not show.
- Site search cannot find the article but Google can.

### 10. 10 分钟排查清单

End with a concise checklist:

- Open the post URL directly.
- Check HTTP status.
- Check robots.txt.
- Check sitemap.
- Check canonical/noindex.
- Confirm production build contains the post.
- Submit or inspect URL in Google Search Console.
- Submit or inspect URL in Bing Webmaster Tools.
- Use IndexNow after content updates.
- Wait if the URL is discovered and technically valid.

## Tone And Style

- Write in Chinese.
- Use a practical, calm troubleshooting tone.
- Prefer short sections and concrete commands.
- Avoid implying that every non-indexed page is a technical failure.
- Make clear distinctions between crawling, indexing, ranking, and site-search indexing.
- Keep examples generic with `example.com`, but include Mizuki/Astro-specific notes where useful.

## Acceptance Criteria

- The article does not duplicate the existing IndexNow article.
- The article contains at least one command example for HTTP status, sitemap checking, and canonical/noindex checking.
- The article includes PowerShell-friendly examples where shell commands are likely to be copied by Windows users.
- The article has internal links to the existing IndexNow and Bing SEO posts.
- The final section is a short actionable checklist.
- The reader can use the article to classify the failure into a concrete cause category.
