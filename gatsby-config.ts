import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Opgeruimd wonen`,
    siteUrl: `https://www.opgeruimdwonen.be`,
    description:
      'Op zoek naar rust en ruimte in je huis én een snelle verkoop? Ik combineer opruimcoaching en vastgoedstyling om jouw woning verkoopklaar te maken. Samen zorgen we voor een frisse, aantrekkelijke uitstraling die kopers aantrekt!',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:700`, `figtree\:400,800`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'nl',
      },
    },
  ],
}

export default config
