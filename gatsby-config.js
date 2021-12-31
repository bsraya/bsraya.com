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
    resume: `https://drive.google.com/file/d/1i_MoSHg68ZPNVwrtWHs1iqkH1jabmYt3/view?usp=sharing`,
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
        background_color: `rgba(0,0,0,0.9)`,
        theme_color: `rgba(0,0,0,0.9)`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'src',
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
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
              fontStlye: require.resolve(`${__dirname}/src/fonts/share.woff2`),
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: `Synthwave '84`,
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
              fontStyle: require.resolve(`${__dirname}/src/fonts/stratos.woff2`),
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: site.siteMetadata.keywords,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
            {
              allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { published: { eq: true }, type: { eq: "blog" }} }
              )
              {
                edges {
                  node {
                    html
                    excerpt
                    fields {
                      slug
                    }
                    frontmatter {
                      date (formatString: "MMMM DD, YYYY")
                      title
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'Bijon Setyawan Raya Blog',
            match: '^/blog/',
          },
        ],
      },
    },
  ],
};
