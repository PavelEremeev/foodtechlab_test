import react from 'react';
import './SetsPage.css'

import SetCard from '../SetCard/SetCard';

export default function SetsPage() {

    return (
        <section className="sets-page">
            <SetCard></SetCard>
            <SetCard></SetCard>
            <SetCard></SetCard>
        </section>
    )
}