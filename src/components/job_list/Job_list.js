import React from 'react';
import './Job_list.css';
import Employment from './../../assets/database.json';

const axios = require('axios');
axios.get('https://geo.api.gouv.fr/communes?codePostal=93700').then(res => {console.log(res.data); console.log(res.data[0].nom, res.data[0].codesPostaux[0])});

const offers = Employment;
console.log(offers);

const JobList = () => {
    return(
        <div className="Job_container">
            <p>Liste des offres d'emploi</p>
        </div>
    );
}

export default JobList;