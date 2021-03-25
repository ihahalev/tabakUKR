import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          
          <meta name="robot" content="index, follow"/>
          <meta name="keywords" content="табак, Киеве, машинка для заправки"/>
          <meta name="description" content="Купить табак и аксессуары для курения Качественная продукция от признанных мировых лидеров. Гарантия качества☑ Лучшая цена $ Доставка по Украине✈" />
	        <meta property="og:locale" content="ru_RU" />
	        <meta property="og:type" content="website" />
	        <meta property="og:title" content="Купить табак и аксессуары для курения ТАБАК.УКР Мы Вам поможем" />
	        <meta property="og:description" content="Купить табак и аксессуары для курения Качественная продукция от признанных мировых лидеров. Гарантия качества☑ Лучшая цена $ Доставка по Украине✈" />
	        <meta property="og:url" content="https://xn--80aac1bxb.xn--j1amh/" />
	        <meta property="og:site_name" content="ТАБАК.УКР" />
	        <meta property="article:publisher" content="https://www.facebook.com/profile.php?id=100058455937300" />
	        <meta property="article:modified_time" content="2021-02-10T15:01:53+00:00" />
	        <meta property="og:image" content="https://xn--80aac1bxb.xn--j1amh/wp-content/uploads/2018/11/quote-1.png" />

          <link href="https://xn--80aac1bxb.xn--j1amh/wp-content/uploads/2018/11/quote-1.png" rel="icon"/>
	        <link href="https://xn--80aac1bxb.xn--j1amh/" rel="canonical"/>
          <meta property="og:type" content="business.business"/>
          {/* <base href="https://tabakka.com.ua/"/> */}
{/* <meta property="og:image" content="https://tabakka.com.ua/image/catalog/mirtabaka.png"/> */}
{/* <meta property="og:image:secure_url" content="https://tabakka.com.ua/image/catalog/mirtabaka.png"/> */}
{/* <meta property="og:url" content="https://tabakka.com.ua/tabak.html"> */}
{/* <meta property="business:contact_data:email" content="inna_245@ukr.net"/> */}
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"/>
        </Head>  
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument