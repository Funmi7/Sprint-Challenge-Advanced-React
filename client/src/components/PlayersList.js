import React from 'react';
import PlayersCard from './PlayersCard';


export default class PlayersList extends React.Component {

    render() {
        
        const {playersList} = this.props;
        return (
            playersList.map(player => {
                return (
                    <PlayersCard key={player.id} name={player.name}
                    country={player.country}
                    searches={player.searches}
                     />
                )
            })
        )
    }
}