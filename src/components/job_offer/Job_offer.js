import React from 'react';
import './job_offer.css';

const JobOffer = (props) => {

    const jobCreatedDate = props.jobCreatedDate;
    const jobUpdatedDate = props.jobUpdatedDate;

    const offerDate = (editedDate, publishedDate) => {
        if(editedDate && editedDate.length > 0) {
            return `Mise à jour le ${editedDate}`;
        }
        else {
            return (publishedDate)? `Crée le ${publishedDate}` : `N/A`
        }
    }
    
    return (
        <div className='job_offer_container'>
            <div>
                <div>
                    <span><i className="fa-solid fa-star"></i></span> {props.jobCategory}
                </div>
                <div>{offerDate(jobUpdatedDate, jobCreatedDate)}</div>
                <div><i className="fa-solid fa-heart"></i></div>
            </div>
            <div>{props.jobTitle}</div>
            <div>
                <div>{props.workPlace}</div>
                <div>{props.contractType}</div>
            </div>
            <div>
                {props.society
                    ? <div>{props.society}</div>
                    : <div>Nom de l'entreprise non renseigné.</div>
                }
                <div><button>Postuler <span><i className="fa-solid fa-arrow-right"></i></span></button></div>
            </div>
        </div>
    );
}

export default JobOffer;