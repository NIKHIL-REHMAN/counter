// Write your code here
import {component} from 'react'
import './index.css'

class counter extends component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg_container">
        <h1 className="heading">
          This Button has been clicked<span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="para" onClick={this.onIncrement}>
          click the button to increase the count!
        </p>
        <button className="button">Click Me!</button>
      </div>
    )
  }
}
