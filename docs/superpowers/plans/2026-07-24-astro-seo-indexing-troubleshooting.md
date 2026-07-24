# Astro SEO Indexing Troubleshooting Article Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Chinese troubleshooting article that helps Astro/Mizuki/Fuwari blog users diagnose why deployed posts are not indexed by Google or Bing.

**Architecture:** This is a content-only change. Create one focused Markdown post under `src/content/posts/`, using the approved article structure and linking to existing SEO-related posts.

**Tech Stack:** Astro content collection, Markdown, YAML frontmatter.

## Global Constraints

- Write the article in Chinese.
- Do not modify site code or configuration.
- Do not duplicate the existing IndexNow or Bing SEO articles.
- Include command examples for HTTP status, sitemap checking, and canonical/noindex checking.
- Include PowerShell-friendly examples where useful for Windows readers.
- Include internal links to the existing IndexNow and Bing SEO posts.
- End with a short actionable checklist.

---

### Task 1: Create The Troubleshooting Article

**Files:**
- Create: `src/content/posts/astro-seo-indexing-troubleshooting/index.md`

**Interfaces:**
- Consumes: `docs/superpowers/specs/2026-07-24-astro-seo-indexing-troubleshooting-design.md`
- Produces: A complete Chinese Markdown article with valid frontmatter.

- [ ] **Step 1: Create the post file with approved frontmatter and full article body**

Use the approved metadata and write these sections:

- `先判断是不是真的没收录`
- `确认文章页面真的在线`
- `检查 robots.txt 有没有挡住爬虫`
- `检查 Sitemap 是否包含新文章`
- `检查 canonical 和 noindex`
- `检查构建产物和部署命令`
- `在搜索平台里看真实原因`
- `IndexNow 推送成功但仍不收录怎么办`
- `常见问题速查表`
- `10 分钟排查清单`

- [ ] **Step 2: Verify required phrases and sections exist**

Run:

```powershell
Select-String -Path src\content\posts\astro-seo-indexing-troubleshooting\index.md -Pattern "curl -I","sitemap","canonical","noindex","PowerShell","IndexNow","10 分钟排查清单"
```

Expected: output contains matches for every pattern.

- [ ] **Step 3: Verify frontmatter can be located**

Run:

```powershell
Get-Content src\content\posts\astro-seo-indexing-troubleshooting\index.md -TotalCount 20
```

Expected: the file starts with `---`, includes `title`, `published`, `description`, `tags`, `category`, `draft`, and `lang`, then closes frontmatter with `---`.

- [ ] **Step 4: Commit the article**

```bash
git add src/content/posts/astro-seo-indexing-troubleshooting/index.md docs/superpowers/plans/2026-07-24-astro-seo-indexing-troubleshooting.md
git commit -m "docs: add astro seo indexing troubleshooting article"
```
