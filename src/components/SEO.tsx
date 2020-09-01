import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  lang?: string,
  title: string,
  description?: string,
  meta?: Meta[],
}

interface Meta {
  name: string,
  content: string,
}

const SEO: FC<Props> = ({ lang = 'en', title, description, meta = [] }) => {
  const { site } = useStaticQuery(siteMetadata)
  const siteMeta = site.siteMetadata
  const pageDescription = description ?? siteMeta.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMeta.title}`}
      meta={[
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMeta.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: pageDescription,
        },
      ].concat(meta)}
    />
  )
}

const siteMetadata = graphql`
  query {
    site {
      siteMetadata {
        author
        title
        description
      }
    }
  }
`

export default SEO