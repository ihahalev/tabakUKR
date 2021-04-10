const Footer: React.FC = function ({ children }) {
  return (
    <footer className="container footer">
      <h2 className="logo">табак.ukr</h2>
      <ul className="list footer-menu">
        <li className="footer-menu__item">Мой кабинет</li>
        <li className="footer-menu__item">Оплата и доставка</li>
        <li className="footer-menu__item">Сертификаты</li>
      </ul>
      <ul className="list socials">
        <li className="socials__item">
          <a href="#" className="link socials__link">
            <svg className="link socials__icon">
              <use href="./icons/symbol.svg#facebook"></use>
            </svg>
          </a>
        </li>
        <li className="socials__item">
          <a href="#" className="link socials__link">
            <svg className="link socials__icon">
              <use href="./icons/symbol.svg#instagram"></use>
            </svg>
          </a>
        </li>
        <li className="socials__item">
          <a href="#" className="link socials__link">
            <svg className="link socials__icon">
              <use href="./icons/symbol.svg#telegram"></use>
            </svg>
          </a>
        </li>
      </ul>
      <ul className="list footer-menu">
        <li className="footer-meum__item">+38(095) 836-20-33</li>
        <li className="footer-meum__item">+38(068) 363-39-33</li>
      </ul>
      <button className="button">Связаться с нами</button>
      <p className="logo">Сopyright 2021</p>
    </footer>
  )
}

export default Footer;