import axios from "axios";
import { useEffect, useState } from "react";
export const FormulaireInscription = () => {

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
    useEffect(()=>{
        fetchFormation()
    },[])


    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        selectFormation: '',
        message: ''
    });

    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Your other form submission logic here
        console.log(formData);

        // Display confirmation message
        setConfirmationMessage(`Un email a été envoyé à l'adresse ${formData.email}`);

        // Reset the form
        setFormData({
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            selectFormation: '',
            message: ''
        });

        // Hide the confirmation message after 3 seconds
        setTimeout(() => {
            setConfirmationMessage('');
        }, 3000);
    };

    return (

        <>
            <div className='flex justify-center'>
                <form className='w-2/3 pt-6' id="contactForm" onSubmit={handleSubmit}>
                    <label htmlFor="nom">Nom:</label><br />
                    <input className='w-full py-2 px-2 border rounded-lg'
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        minLength="2"
                        maxLength="100"
                        value={formData.nom}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="prenom">Prénom:</label><br />
                    <input className='w-full py-2 px-2 border rounded-lg'
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        minLength="2"
                        maxLength="100"
                        value={formData.prenom}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="email">Email:</label><br />
                    <input className='w-full py-2 px-2 border rounded-lg'
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="telephone">Téléphone:</label><br />
                    <input className='w-full py-2 px-2 border rounded-lg'
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        minLength="10"
                        maxLength="10"
                        value={formData.telephone}
                        onChange={handleChange}
                    /> <br /><br />

                        <select className='w-full py-2 px-4 border rounded-lg' id="dropdown" name="role" required>
                            <option disabled selected value="">Selectionner votre formation</option>
                            

                            {FormationsArray.map((formation, index) => (
                            <option key={index} value={formation}>
                                {formation.nomFormation}
                            </option>
                            ))}
                        </select> <br /><br />

                    <label htmlFor="message">Message:</label><br />
                    <textarea className='w-full py-2 px-2 border rounded-lg'
                        type="text"
                        id="message"
                        name="message"
                        required
                        rows="10"
                        value={formData.message}
                        onChange={handleChange}
                    /><br />

                    <button className='bg-teal-200 py-3 px-7 font-bold rounded-lg my-6' type="submit">Envoyer</button>
                </form> <br />


            </div>

            {confirmationMessage && (
                <p id="confirmationMessage">{confirmationMessage}</p>
            )}
        </>
    );
}