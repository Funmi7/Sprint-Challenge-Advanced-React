import React from 'react';

export default class PlayersCard extends React.Component {
    render () {
        const {name, country, searches} = this.props;
        return (
            <div>
                <h3>Name: {name}</h3>
                <p>Country: {country}</p>
                <p>Searches: {searches}</p>
            </div>
        )
    }
    
}