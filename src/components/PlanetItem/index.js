// Write your code here
import './index.css'

const PlanetItem = props => {
  const {each} = props
  const {name, imageUrl, description} = each
  return (
    <div data-testid="planets" className="item-container">
      <img src={imageUrl} className="image-url" alt={`planet ${name}`} />;
      <h1 className="name">{name}</h1>
      <p className="paragraph">{description}</p>
    </div>
  )
}

export default PlanetItem
