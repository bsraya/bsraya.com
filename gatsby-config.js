module.exports = {
  siteMetadata: {
    title: `Bijon Setyawan Raya`,
    author: `Bijon Setyawan Raya`,
    description: `I am Bijon Setyawan Raya. I am an aspiring Machine Learning engineer and a Front-End developer.`,
    keywords: [
      'Bijon Setyawan Raya',
      'Machine Learning Engineer',
      'Front-End Developer',
    ],
    email: `nathan.setyawan96@gapp.nthu.edu.tw`,
    siteUrl: `https://www.bsraya.com`,
    resume: `https://drive.google.com/file/d/1MVkMj3jRxBpQ4dVJfiTkhuvTvcUsa-pG/view?usp=sharing`,
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Resume',
        link: '/resume',
      },
      {
        name: 'Portfolio',
        link: '/portfolio',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-189126194-1`,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bijon Setyawan Raya`,
        short_name: `Bijon S. R.`,
        start_url: `/`,
        background_color: `#101010`,
        theme_color: `#101010`,
        display: `standalone`,
        legacy: true,
        icon: `${__dirname}/static/favicons/icon.png`
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    // `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 568,
        showCaptions: true,
        loading: `lazy`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`${__dirname}/src/templates/blogpost.js`),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-unwrap-images`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-remark-gifs`,
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              showCaptions: true,
              loading: `lazy`,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              height: 325,
              width: 568,
              ratio: 1.77,
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
            },
          },
          {
            resolve: `gatsby-remark-code-titles`,
            options: {
              className: `gatsby-code-title`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
              minRuleThickness: 0.06,
              displayMode: true,
              throwOnError: true,
              colorIsTextColor: true,
            },
          },
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: `Bijon Setyawan Raya`,
              titleFontSize: 105,
              fontColor: `#fff1d0`,
              background: require.resolve(`${__dirname}/content/assets/base.png`),
              fontStlye: require.resolve(`${__dirname}/src/fonts/Share-Regular.woff2`),
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: `Monokai`,
                parentSelector: {
                  'body.dark': `Synthwave '84`
                }
              },
              inlineCode: {
                marker: ':',
                theme: {
                  default: `Monokai`,
                  parentSelector: {
                    'body.dark': `Synthwave '84`
                  }
                },
              },
              extensions: [`synthwave-vscode`],
            },
          },
        ],
        remarkPlugins: [
          require('remark-html-katex')
        ]
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              author: 'Bijon Setyawan Raya',
              background: require.resolve(`${__dirname}/content/assets/base.png`),
              fontColor: `#fff1d0`,
              titleFontSize: 105,
              subtitleFontSize: 60,
              fontStyle: require.resolve(`${__dirname}/src/fonts/Stratos-Light.woff2`),
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.bsraya.com/',
        sitemap: 'https://www.bsraya.com//sitemap.xml',
        policy: [{ userAgent: '*', Disallow: '' }],
      },
    },
  ],
};
