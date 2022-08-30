import React from "react";
import CardList from "./component/CardList";
import ErrorBoundary from "./component/ErrorBoundary";
import Scroll from "./component/Scroll";
import SearchBox from "./component/SearchBox";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 style={{ color: 'white' }}>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App;