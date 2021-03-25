const Header: React.FC = function ({children}) {
  return (
    <header>
      <h1 className="visualy-hidden">табак.укр</h1>
      <a href="#" className="logo">табак.укр</a>
      <div className="menu"></div>
            {/* <nav></nav> */}
      <div className="cart">cart</div>
    </header>
  )
}

export default Header