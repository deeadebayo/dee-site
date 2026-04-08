/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://deeadebayo.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  sitemapSize: 7000,
}
