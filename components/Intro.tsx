interface IIntro {
  type?: string
}

const Intro: React.FC<IIntro> = function ({children, type = 'home'}) {
  const classes = ['container','intro', type]
  return (
    <section className={classes.join(' ')}>
      <h2 className="title">табак</h2>
      <p className="discription">и все к табаку</p>
    </section>
  )
}

export default Intro