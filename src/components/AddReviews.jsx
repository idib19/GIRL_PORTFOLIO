import React, { useState, useEffect } from "react";
import axios from "axios"; //axios est une librairie pour nous aider a faire des requeettes HTTP de facon plus facile

export default function AddReviews({ info, update }) {
    const apiUrl = 'http://localhost:5000/reviews'

    // variable state pour stoker les valeurs de champs du formulaire
    const [state, setState] = useState({
        prenom: "",
        nom: "",
        message: "",
    });

    //modifier un temoigange 
    const modifierTemoignage = async (nom) => {
        try {
            await axios.put(`${apiUrl}/${encodeURIComponent(nom)}`,state);
            console.log("Modification effctue avec success!");

            location.reload();
        } catch (error) {
            console.error("Erreur de modification de  temoignage", error);
        }
    };
    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/${encodeURIComponent(info)}`);
            const object = response.data.data;

            setState((prevState) => ({
                ...prevState,
                prenom: object.prenom,
                nom: object.nom,
                message: object.message,
            }));
        } catch (error) {
            // Handle any errors that occur during the request
            console.error("Error fetching data:", error);
        }

        if (info == "") {
            console.log(info);
        }
    };
    useEffect(() => {
        //on verifie qu'on veut bien update le temoignage ou pas avant de recuperer les donnes 
        if (update === true) {
            fetchData()
        }

        // Return the cleanup function (if applicable)
        return () => {
            // Cleanup logic (if needed)
        };
    }, [info, apiUrl, setState]);



    // Cette fonction gere la mise a jour du state a chaque changement dans le formulaire
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    //Cette fonction gere la soumission du formulaire pour les nouveaux temoignages
    const handleSubmit = async (e) => {

        try {

            // Si il s'agit d'un update :
            if (update === true) {
                modifierTemoignage(info)
            }
            else { // Si il s'agit d'un nouvel ajout :
                await axios.post(apiUrl, state);
                console.log("Nouveau Temoignage!"); //Message de confirmation
            }



            setState({ //mise a jour des entre du formulaire 
                prenom: "",
                nom: "",
                message: "",
            });
        } catch (error) {
            console.error("Erreur Soumission Temoignage", error);
        }
    };

    return (
        <div className="flex flex-col items-center jusity-center mt-4 ">
            <div className="drop-shadow-2xl bg-gray-300 rounded-xl">
                <h2 className="text-lg font-bold">Fait un Temoignage</h2>
                <form onSubmit={handleSubmit}>
                    <div className="h-auto flex items-center px-8 py-3">
                        <div className="w-full px-2 border-b-2">
                            <label className="text-center font-bold" htmlFor="prenom">
                                Prenom
                            </label>
                        </div>
                        <div className="w-full">
                            <input
                                className="w-auto text-center h-8 focus:bg-gray-100"
                                type="text"
                                name="prenom"
                                id="prenom"
                                placeholder="Entrer le prenom"
                                value={state.prenom}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="h-auto flex items-center px-8 py-3">
                        <div className="w-full px-2 border-b-2">
                            <label className="text-center font-bold" htmlFor="nom">
                                Nom
                            </label>
                        </div>
                        <div className="w-full">
                            <input
                                className="w-auto text-center h-8 focus:bg-gray-100"
                                type="text"
                                name="nom"
                                id="nom"
                                placeholder="Entrer le nom"
                                value={state.nom}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="h-auto flex items-center px-8 py-3">
                        <div className="w-full px-2 border-b-2">
                            <label className="text-center font-bold" htmlFor="message">
                                Message
                            </label>
                        </div>
                        <div className="w-full">
                            <input
                                className="w-auto text-center h-8 focus:bg-gray-100"
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Entrer le message"
                                value={state.message}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="w-fit bg-green-500 text-white m-4" type="submit">
                        Confirmer
                    </button>
                </form>
            </div>
        </div>
    );
}
