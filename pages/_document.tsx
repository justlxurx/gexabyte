import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
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
                  <div>
                      <div>
                          <img src={"https://mc.yandex.ru/watch/91778393"} style={{ position:'absolute', left:'0px' }} alt="ynd"/>
                      </div>
                  </div>
              </noscript>
          </Head>
          <body>
          <Main />
          <NextScript />
          </body>
      </Html>
  )
}
