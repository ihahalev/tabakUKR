import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface IMainLayout {
  title?: string
}

const MainLayout: React.FC<IMainLayout> = function ({ children, title }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title + 'ТАБАК.УКР' || 'Купить табак и аксессуары для курения ТАБАК.УКР Мы Вам поможем'}</title>
      </Head>
      <Header>

      </Header>
      <main className="container">
        {children}
      </main>
      <Footer>

      </Footer>
    </>
  )
}

export default MainLayout