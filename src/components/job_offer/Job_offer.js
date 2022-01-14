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
            <div className='offer_top_zone'>
                <div className='offer_top_zone-left'>
                    <span><i className="fa-solid fa-star"></i></span> {props.jobCategory}
                </div>
                <div className='offer_top_zone-right'>{offerDate(jobUpdatedDate, jobCreatedDate)}</div>
                <div className='heart'><i className="fa-solid fa-heart"></i></div>
            </div>
            <div className='offer_middle_zone-upper'>{props.jobTitle}</div>
            <div className='offer_middle_zone-lower'>
                <div>{props.workPlace}</div>
                <div>{props.contractType}</div>
            </div>
            <div className='offer_bottom_zone'>
                {props.society
                    ? <div className='company'>{props.society}</div>
                    : <div className='unknow_company'>Nom de l'entreprise non renseigné.</div>
                }
                <div className='apply-area'><button>Postuler <span><i className="fa-solid fa-arrow-right"></i></span></button></div>
            </div>
        </div>
    );
}

export default JobOffer;