import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import ogImage from "../../content/assets/metaImage.png"

const query = graphql`
    query getSiteMetadata {
        site {
            siteMetadata {
                author
                description
                keywords
                siteUrl
                title
            }
        }
    }
`;

function SEO({ meta, title, description, slug, lang, type }) {
    return(
        <StaticQuery
            query = {query}
            render = {data => {
                const { siteMetadata } = data.site;
                const metaDescription = description || siteMetadata.description;
                const defaultTitle = data.site.siteMetadata?.title;
                const keywords = siteMetadata.keywords;
                return(
                    <Helmet
                        htmlAttributes = {{lang, }}
                        title={title}
                        titleTemplate={defaultTitle ? `%s - ` + data.site.siteMetadata.author : null}
                        meta={
                            [
                                {
                                    name: 'description',
                                    content: metaDescription,
                                },
                                {
                                    property: 'og:url',
                                    content: `${siteMetadata.siteUrl}${slug}`,
                                },
                                {
                                    property: 'og:title',
                                    content: title || siteMetadata.title,
                                },
                                {
                                    property: 'og:description',
                                    content: metaDescription,
                                },
                                {
                                    property: `og:type`,
                                    content: type
                                },
                                {
                                    name: 'twitter:card',
                                    content: `summary_large_image`,
                                },
                                {
                                    name: 'twitter:creator',
                                    content: data.site.siteMetadata.title,
                                },
                                {
                                    name: 'twitter:title',
                                    content: title || siteMetadata.title,
                                },
                                {
                                    name: 'twitter:description',
                                    content: metaDescription,
                                },
                            ]
                            .concat(
                                keywords.length > 0
                                    ?
                                    {
                                        content: keywords.filter((k) => typeof k === 'string').join(`, `),
                                        name: `keywords`,
                                    }
                                    : []
                            )
                            .concat(
                                type === "website"
                                    ? 
                                    [
                                        {
                                            property: 'og:image',
                                            content: `${siteMetadata.siteUrl}${ogImage}`,
                                        },
                                        {
                                            name: 'twitter:image',
                                            content: `${siteMetadata.siteUrl}${ogImage}`,
                                        },
                                    ]
                                    :
                                    [
                                        {
                                            property: 'og:image',
                                            content: `${siteMetadata.siteUrl}${slug}twitter-card.jpg`,
                                        },
                                        {
                                            name: 'twitter:image',
                                            content: `${siteMetadata.siteUrl}${slug}twitter-card.jpg`,
                                        },
                                    ]
                            )
                            .concat(meta)
                        }
                    />
                )
            }}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    title: '',
    slug: '',
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    slug: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default SEO;

