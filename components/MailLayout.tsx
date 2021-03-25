import Head from 'next/head'

interface IMainLayout {
  title?: string
}

const MainLayout: React.FC<IMainLayout> = function ({children, title}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{title + 'ТАБАК.УКР' || 'Купить табак и аксессуары для курения ТАБАК.УКР Мы Вам поможем'}</title>
      </Head>
      <header className="container">
        <nav>
          <h1>табак.укр</h1>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </>
  )
}

export default MainLayout