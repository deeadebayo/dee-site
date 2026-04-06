import type { Person, WebSite, WithContext } from 'schema-dts'

export const myPerson: Person = {
    '@type': 'Person',
    name: 'Adeolu Adebayo',
    disambiguatingDescription: 'Software engineer in Atlanta',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer',
    },
    email: 'mailto:hi@deeadebayo.com',
    url: 'https://www.deeadebayo.com',
  },
  schemaOrgWebPage: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': process.env.SITE_URL,
    url: process.env.SITE_URL,
    headline: process.env.SITE_TITLE,
    inLanguage: 'English',
    // mainEntity: {@type: 'Webpage', author: 'Adeolu Adebayo',},
    description: process.env.SITE_DESCRIPTION,
    name: process.env.SITE_TITLE,
    author: 'Adeolu Adebayo',
    // copyrightHolder: `Person`,
    copyrightYear: '2019',
    creator: 'Adeolu Adebayo',
    datePublished: '2019-01-01T10:30:00+01:00',
    dateModified: process.env.NEXT_PUBLIC_BUILD_TIME,
    // image: {
    //   '@type': 'ImageObject',
    //   url: `${siteUrl}${defaultImage}`,
    // },
    // thumbnail: ['/icon.png'],
  }
