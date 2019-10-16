import React from 'react';
import './App.css';
import axios from 'axios';
import PlayersList from './components/PlayersList';
import DarkModeSetter from './components/DarkModeSetter'


const playersAPI = 'http://localhost:5000/api/players'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersList : []
    }
  }

  componentDidMount() {
    axios.get(playersAPI)
    .then(response => {
      this.setState({playersList: response.data})
      console.log(response.data)
    })
    .catch(error => {
      console.log('Error: ', error)
    })
  }
  render() {
    return (
      <div className="App">
        
        <DarkModeSetter />
      <PlayersList 
       playersList={this.state.playersList} />
      </div>
    );
  }
 
}

export default App;
