import React, { Component } from 'react'

export default class API extends Component{


    static apiGet(qType,searchTerm) { 
        
    const searchURL = `https://swapi.co/api/${qType}`;

    // const queryString = this.formatQueryParams(data);

    const url = `${searchURL}?search=${searchTerm}` ;

    console.log(url);

    const options = {
        method: 'GET',
        headers: {
        "Content-Type": "application/json"
        }
    };

    return fetch(url, options)
    }

    static formatResults = (qType,json) => {
        let cards
        if (qType === 'people'){
            cards = json.results.map(result => {
                const {name, height, mass, gender, birth_year} = result
                return {
                    qType,
                    name,
                    height,
                    mass,
                    gender,
                    YoB : birth_year
                }
            })
        }

        if (qType === 'planets'){
            cards = json.results.map(result => {
                const {name, diameter, gravity, terrain, population,climate,orbital_period} = result
                return {
                    qType,
                    name,
                    diameter,
                    gravity,
                    terrain,
                    population,
                    climate,
                    orbit: orbital_period,
                }
            })
        }

        if (qType === 'films'){
            cards = json.results.map(result => {
                const {title, episode_id, director, producer, release_date, opening_crawl} = result
                return {
                    qType,
                    title,
                    episode: episode_id,
                    director,
                    producer,
                    debut:release_date,
                    desc:opening_crawl
                }
            })
        }

        if (qType === 'species'){
            cards = json.results.map(result => {
                const {name, classification, designation, average_height, language} = result
                return {
                    qType,
                    name,
                    classification,
                    designation,
                    average_height,
                    language
                }
            })
        }

        if (qType === 'vehicles'){
            cards = json.results.map(result => {
                const {name, model, manufacturer, cost_in_credits, length, passengers, crew, vehicle_class} = result
                return {
                    qType,
                    name,
                    model,
                    manufacturer,
                    cost: cost_in_credits,
                    length,
                    passengers,
                    crew,
                    class : vehicle_class
                }
            })
        }

        if (qType === 'starships'){
            cards = json.results.map(result => {
                const {name, model, manufacturer, cost_in_credits, length, passengers, crew, starship_class, hyperdrive_rating} = result
                return {
                    qType,
                    name,
                    model,
                    manufacturer,
                    cost: cost_in_credits,
                    length,
                    passengers,
                    crew,
                    class : starship_class,
                    hypeRate: hyperdrive_rating,
                }
            })
        }
        return cards;
    }
}

