import FirstBlockLayout from 'components/layouts/FirstBlockLayout'
import Head from 'next/head'
import React from 'react'

const Solutions = () => {
  return (
    <>
      <Head>
        <title>Solutions - TechCulture</title>
        <meta property="og:title" content="TechCulture" key="title" />
        <meta name="description" content="Free Web tutorials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ minHeight: '100vh', marginBottom: '4rem' }}>
        <FirstBlockLayout
          title='Blockchain development & consulting company'
          subTitle='We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision'
          bgAnimationSrc='/videos/klava.mp4'
        />
        <h1>ТУТ БУДЕТ НОВЫЙ ДИЗАЙН</h1>
      </div>
    </>
  )
}

export default Solutions