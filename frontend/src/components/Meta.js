import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'MyNutza Hoş Geldiniz!',
  description: 'en taze kuruyemişler burada',
  keywords: 'kuruyemiş, taze kuruyemiş, ucuz kuruyemiş',
}

export default Meta

