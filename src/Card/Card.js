import React, { Component } from 'react';
import SearchContext from '../SearchContext';

class Cards extends Component {
    

    render() {
        return (<SearchContext.Consumer>
                    {(context) => {
                        return (context.cards.map(card => {
                        if(card.qType === 'people'){
                            return (
                            <li>
                                <h2>{card.name}</h2>
                                <div>
                                    <h3>Born: {card.YoB}</h3>
                                    <h4>weight: {card.mass}</h4>
                                    <h4>Gender: {card.gender}</h4>
                                </div>
                            </li>
                            )
                        }
                        if(card.qType === 'planets'){
                            return (
                            <li>
                                <h2>{card.name}</h2>
                                <div>
                                    <h3>Population: {card.population}</h3>
                                    <h4>Gravity: {card.gracity}</h4>
                                    <h4>Climate: {card.climate}</h4>
                                    <h4>Terraim: {card.terrain}</h4>
                                    <h4>Orbital Period: {card.orbit}</h4>
                                </div>
                            </li>
                            )
                        }
                        if(card.qType === 'films'){
                            return (
                            <li>
                                <h2>{card.title}</h2>
                                <div>
                                    <h3>Episode: {card.episode}</h3>
                                    <h4>Director: {card.director}</h4>
                                    <h4>Producer: {card.producer}</h4>
                                    <h4>Debut: {card.debut}</h4>
                                    <h4>{card.desc}</h4>
                                </div>
                            </li>
                            )
                        }
                        if(card.qType === 'species'){
                            return (
                            <li>
                                <h2>{card.name}</h2>
                                <div>
                                    <h3>Language: {card.language}</h3>
                                    <h4>Classification: {card.classification}</h4>
                                    <h4>Designation: {card.designation}</h4>
                                    <h4>Average Height: {card.average_height}</h4>
                                </div>
                            </li>
                            )
                        }
                        if(card.qType === 'vehicles'){
                            return (
                            <li>
                                <h2>{card.name}</h2>
                                <div>
                                    <h3>Model: {card.model}</h3>
                                    <h4>Manufacturer: {card.manufacturer}</h4>
                                    <h4>Class: {card.class}</h4>
                                    <h4>Cost: {card.cost}</h4>
                                    <h5>Passenger Capacity: {card.passengers}</h5>
                                    <h5>Crew Capacity: {card.crew}</h5>
                                    <h5>Length: {card.length}</h5>
                                </div>
                            </li>
                            )
                        }
                        if(card.qType === 'starships'){
                            return (
                            <li>
                                <h2>{card.name}</h2>
                                <div>
                                    <h3>Model: {card.model}</h3>
                                    <h4>Manufacturer: {card.manufacturer}</h4>
                                    <h4>Class: {card.class}</h4>
                                    <h4>Drive Rating: {card.hypeRate}</h4>
                                    <h4>Cost: {card.cost}</h4>
                                    <h5>Passenger Capacity: {card.passengers}</h5>
                                    <h5>Crew Capacity: {card.crew}</h5>
                                    <h5>Length: {card.length}</h5>
                                </div>
                            </li>
                            )
                        }
                        }))
                    }}
                </SearchContext.Consumer>)
    }
    
}



export default Cards;