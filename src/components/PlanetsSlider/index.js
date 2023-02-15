// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import './index.css'
import PlanetItem from '../PlanetItem'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="container">
        <h2 className="heading"> PLANETS</h2>
        <Slider {...settings} className="slider-container">
          {planetsList.map(each => (
            <PlanetItem each={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
