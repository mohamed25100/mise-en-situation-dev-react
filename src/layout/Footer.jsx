import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

export const Footer = () => {

    const [FormationsArray, setFormation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const URL_API = "http://localhost:8085/manager/formation"
    const fetchFormation = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(URL_API);

            setFormation(data);
        } catch (error) {
            console.log(error);
            setError(error.message || "Une erreur est survenue");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchFormation()
    }, [])

    return (
        <footer className='flex py-4 bg-orange-300 gap-5'>
            
            <FooterContact />

            {/* Le top 30 de nos formations */}
            <TopFormations FormationsArray={FormationsArray} />

            {/* Découvrez Dawan */}
            <DecouvrezDawan />

            {/* Suivez nous */}
            <SuivezNous />
        </footer>
    )
}


export const FooterContact = () => {
    return (
        <div>

            <img src="https://www.dawan.fr/build/images/dawan-logo.5b6f94e2.png" alt="logo" />
            <ul>
                <li>09 72 37 73 73 <br />(Prix d'un appel local)</li>
                <li>www.dawan.fr</li>
                <li>Formations, Ingénierie, Conseil</li>
                <li>France - Belgique - Suisse</li>
            </ul>

        </div>
    )
};

export const TopFormations = ({ FormationsArray }) => {
    return (
        <div>
            <h1 className="text-xl font-bold">Le top 30 de nos formations</h1>

            <table className="grid grid-cols-2">
                {FormationsArray.map((formation, index) => (
                    <tr>
                        <td key={index}>{formation.nomFormation}</td>
                    </tr>

                ))}
            </table>
        </div>
    )
}

export const DecouvrezDawan = () => {
    return (
        <div>
            <h1 className="text-xl font-bold">Découvrez Dawan</h1>
            <p>Présentation de notre organisme de formation</p>
            <p>Modalités pédagogiques</p>
            <p>Références</p>
        </div>
    )
}
export const SuivezNous = () => {
    return (
        <div>
            <h1 className="text-xl font-bold">Suivez nous</h1>
        </div>)
}