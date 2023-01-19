import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const schema =   {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "TechCulture",
        "description": "Blockchain development & consulting company. We create complex products using blockchain and web technologies.",
        "url": "https://techculture.tech",
        "email": "sales@techculture.tech",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "KZ",
            "addressLocality": "Almaty",
            "streetAddress": "Markova 22/37"
        },
        "founder": [
            {
                "@type": "Person",
                "name": "Adil Akbayev",
                "gender": "Man",
                "jobTitle": "Chief Executive Officer, co-founder"
            },
            {
                "@type": "Person",
                "name": "Arthur Sundetov",
                "gender": "Man",
                "jobTitle": "Chief Technical Officer, co-founder"
            }
        ],
        "foundingDate": "21.12.2020",
        "sameAs" : [
            "https://digitaldao.asia/",
            "https://kz.linkedin.com/company/techculturealmaty?trk=public_post_feed-actor-name&original_referer=https%3A%2F%2Fwww.linkedin.com%2F"
        ],
        "contactPoint" : [
            {
                "@type" : "ContactPoint",
                "contactType" : "обслуживание клиентов",
                "email": "hr@techculture.tech",
                "url": "https://techculture.tech"
            }
        ]
    }
  return (
      <Html>
          <Head>
              <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
              <link rel={"preconnect"} href={"https://fonts.gstatic.com"} crossOrigin={"anonymous"} />
              <link
                  href={"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"}
                  rel={"stylesheet"}
              />
              <link
                  href={"https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700&display=swap"}
                  rel={"stylesheet"}
              />
              <link
                  href={"https://fonts.googleapis.com/css2?family=Readex+Pro:wght@100;300;400;700&display=swap"}
                  rel={"stylesheet"}
              />
              <link
                  href={"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100;300;400;700&display=swap"}
                  rel={"stylesheet"}
              />
              <link
                  href={"https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;300;400;700&display=swap"}
                  rel={"stylesheet"} />
              <meta name={"yandex-verification"} content={"7dc73ea1ff609887"} />
              <meta name={"google-site-verification"} content={"google3df4a9246fc2a6df"} />
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
                             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
                  ym(91778393, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
              });
              `,
                  }}
              />
              <noscript>
                  <img src={"https://mc.yandex.ru/watch/91778393"} style={{ position:'absolute', left:'0px' }} alt="ynd"/>
              </noscript>
              <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
              />
          </Head>
          <body>
          <Main />

          <NextScript />
          </body>
      </Html>
  )
}
