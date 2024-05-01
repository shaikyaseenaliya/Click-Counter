import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="click-counter-container">
        <h1 className="click-counter-heading">
          The Button has been clicked{' '}
          <span className="click-counter-count">{count}</span> times
        </h1>
        <p className="click-counter-paragraph">
          Click the button to increase the count!
        </p>
        <button
          type="button"
          className="click-counter-button"
          onClick={this.onIncreaseCount}
        >
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
