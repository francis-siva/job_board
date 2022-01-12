import React from 'react';
import './Job_offer.css';

const JobOffer = (props) => {
    return (
        <div className='job_offer_container'>
            <div>{props.jobCreatedDate}</div>
            <div>{props.intitule}</div>
            <div>
                <div>{props.lieuTravail.libelle}</div>
                <div>{props.typeContrat}</div>
            </div>
            <div>
                <div>{props.society}</div>
                <div><button>Postuler</button></div>
            </div>
        </div>
    );
}

export default JobOffer;