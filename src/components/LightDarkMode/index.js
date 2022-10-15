// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isColorChange: true,
  }

  // changing content in button
  checkColorChange = () => {
    const {isColorChange} = this.state

    return isColorChange ? 'Light Mode' : 'Dark Mode'
  }

  // changing background color in container
  checkBgColor = () => {
    const {isColorChange} = this.state

    return isColorChange ? 'black-color' : 'white-color'
  }

  // changing text in container
  checkText = () => {
    const {isColorChange} = this.state

    return isColorChange ? 'white-text' : 'black-text'
  }

  updateColor = () => {
    this.setState(prevState => ({isColorChange: !prevState.isColorChange}))
  }

  render() {
    const buttonText = this.checkColorChange()
    const bgColorText = this.checkBgColor()
    const colorText = this.checkText()

    return (
      <div className="color-container">
        <div className={bgColorText}>
          <h1 className={colorText}>Click To Change Mode</h1>
          <button className="color-light" onClick={this.updateColor}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
