import React from 'react';
import './Job_list.css';
import Employment from './../../assets/database.json';

// const axios = require('axios');
// axios.get('https://geo.api.gouv.fr/communes?codePostal=93700').then(res => {console.log(res.data); console.log(res.data[0].nom, res.data[0].codesPostaux[0])});

let offers = null;

offers = Employment['resultats'];
console.log(offers);

/**
 * Get job proper publication format
 * For data like '2022-01-11T06:10:40.000Z' we will keep only '2022-01-11'
 * @param {string} inputDateTime 
 */
const formatDate = (inputDateTime) => { return inputDateTime.split('T')[0]; }

let dateFromDb = '2022-01-11T06:10:40.000Z';
console.log(formatDate(dateFromDb))

const JobList = () => {
    return (
        <div className="Job_container">
            <p>Liste des offres d'emploi</p>

            {
                !offers ? `<div>Aucun résultat pour le moment.<div>` :
                
                offers.map((jobItem, i) => {
                    console.log(jobItem.intitule);
                    console.log(jobItem.description);
                    console.log(jobItem.typeContrat);
                    console.log(jobItem.experienceLibelle);
                    console.log(jobItem.lieuTravail.libelle);
                    console.log(jobItem.dateCreation);
                    console.warn(jobItem.dateActualisation);

                    const jobCreatedDate = jobItem.dateCreation;
                    const jobUpdatedDate = jobItem.dateActualisation;
                    

                    /* Keep this code to render available date in joblist */
                    if(jobUpdatedDate) {
                        return (<div key={i}>Mise à jour le {formatDate(jobUpdatedDate)}</div>)
                    }
                    else {
                        return jobCreatedDate? (<div key={i}>Crée le {formatDate(jobCreatedDate)}</div>) : '';
                    }
                    //return job_offer component to each jobItem
                })
            }
        </div>
    );
}

export default JobList;