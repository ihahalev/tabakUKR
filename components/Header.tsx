const Header: React.FC = function ({ children }) {
  return (
    <header className="container header clearfix">
      <div className="container z-fixed clearfix">
        <h1 className="visualy-hidden">табак.укр</h1>
        <ul className="list header-menu">
          <li className="header-menu__item ">
            <a href="#" className="link header-menu__link logo">табак.укр</a>
          </li>
          <li className="header-menu__item">
            <a href="#" className="link header-menu__link">
              <svg className="link header-menu__icon menu">
                <use href="./icons/symbol.svg#menu"></use>
              </svg>
            </a>
          </li>
          <li className="header-menu__item">
            <a href="#" className="link header-menu__link">
              <svg className="link header-menu__icon cart">
                <use href="./icons/symbol.svg#cart"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header