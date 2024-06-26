import React from 'react';
import '../styles/Confirmation.scss';
import { formatPhoneNumber } from './NumberFormat';


interface ConfirmationProps {
    date: string;
    time: string;
    name: string;
    phoneNumber: string;
    closeModal: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ date, time, name, phoneNumber, closeModal }) => {
    return (
        <article className="confirmation">
            <section className="confirmation__info">
                <h2>Bokningsdetaljer</h2>
                <div></div>
                <p><strong>Datum:</strong> {date}</p>
                <p><strong>Tid:</strong> {time}</p>
                <p><strong>Namn:</strong> {name}</p>
                <p><strong>Telefonnummer:</strong> {formatPhoneNumber(phoneNumber)}</p>
                <button className="confirmation__info--close" onClick={closeModal}>Bekräfta och stäng</button>
            </section>
        </article>
    );
};

export default Confirmation;
