import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    background-color: rgb(243, 177, 167);
    width: 50%;
    margin: 0 auto;
    `



export default class PlayersCard extends React.Component {
    render () {
        const {name, country, searches} = this.props;
        return (
            <CardStyle>
                <h3>Name: {name}</h3>
                <p>Country: {country}</p>
                <p>Searches: {searches}</p>
            </CardStyle>
        )
    }
    
}