import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Layout'

import classes from './index.module.scss'

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="It's a homepage description" />
      <div className={classes.Home}>
        <p>Hello, boilerplate world!</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor
          rerum magni sit vitae facere. Maxime cum exercitationem, itaque
          perspiciatis ullam corrupti esse nam neque reprehenderit saepe nostrum
          et dicta.
        </p>
      </div>
    </Layout>
  )
}
