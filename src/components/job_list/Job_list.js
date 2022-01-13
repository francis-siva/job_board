import React from 'react';
import './Job_list.css';
import Employment from './../../assets/database.json';
import JobOffer from '../job_offer/Job_offer';

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

const JobList = () => {
    return (
        <div className="joblist_container">
            <h2>Liste des offres d'emploi</h2>
            <ul>
            {
                !offers
                    ? (<li>Aucun résultat pour le moment.</li>)
                    : offers.map((jobItem, i) => {
                        console.log(jobItem.romeLibelle);
                        console.log(jobItem.intitule);
                        console.log(jobItem.description);
                        console.log(jobItem.typeContrat);
                        console.log(jobItem.experienceLibelle);
                        console.log(jobItem.lieuTravail.libelle);
                        console.log(jobItem.dateCreation);
                        console.warn(jobItem.dateActualisation);


                        //return JobOffer component to each jobItem
                        return (
                            <li key={i}>
                                <JobOffer jobCategory={jobItem.romeLibelle}
                                    jobCreatedDate={formatDate(jobItem.dateCreation)}
                                    jobUpdatedDate={formatDate(jobItem.dateActualisation)}

                                    jobTitle={jobItem.intitule}
                                    workPlace={jobItem.lieuTravail.libelle}
                                    contractType={jobItem.typeContrat}
                                    society={jobItem.entreprise.nom} 
                                />
                            </li>
                        );
                    })
            }
            </ul>
        </div>
    );
}

export default JobList;