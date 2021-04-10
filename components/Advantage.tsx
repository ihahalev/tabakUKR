import advContent from '../helpers/advantageContent';

const Advantage: React.FC = function ({ children }) {

  return (
    <section className='section'>
      <h3>почему мы?</h3>
      <ul className="list">
        {advContent.map(({ title, icon, text }) =>
        (<li key={title}>
          <h4 className="item-title">{title}</h4>
          <svg className="item-icon">
            <use className="icon-use" href={icon}></use>
          </svg>
          <p className="text">{text}</p>
        </li>)
        )}
      </ul>
    </section>
  )
}

export default Advantage