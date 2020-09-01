import React, { FC } from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Layout'

import classes from './404.module.scss'

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <SEO title="Page not Found" description="404: Page not Found" />
      <div className={classes.NotFoundPage}>
        <h1>Oops, page not found</h1>
      </div>
    </Layout>
  )
}

export default NotFoundPage
