
import { useRef, useState } from "react";




export default function Contact() {


    //use ref pour les entrees du formualaire 
    const inputPrenomNom = useRef(null);
    const inputEmail = useRef(null);
    const inputMessage = useRef(null);


    const handleSubmit = async (event) => {
        event.preventDefault();

        // validations des champs dans le front-end
        validateprenomNom();
        validateEmail();
        validateMessage();


        if (validprenomNom === "" && validEmail === "" && validMessage === "") { // Si aucune erreur n'as ete detecte :
            //Donnees recuillies des champs du formulaire
            let data = {
                prenom: inputPrenomNom.current.value,
                email: inputEmail.current.value,
                numero: inputNumero.current.value,
                pays: inputPays.current.value,
                domaine: inputDomaine.current.value
                // message: inputMessage.current.value
            }




           

        }

        //Affciher une pasge de confirmation
        router.push('./confirmation');
    }

    // Differents useStates afin de gerer les erreurs de validation dans le front-end
    const [validprenomNom, setvalidprenomNom] = useState("")
    const [validEmail, setvalidEmail] = useState("")
    const [validMessage, setvalidMessage] = useState("")





    const validateprenomNom = () => {
        if (inputPrenomNom.current.validity.valid) {
            setvalidprenomNom('')
        }

        else {
            setvalidprenomNom('Nous avons besoin de votre nom ')
        }
    }


    const validateEmail = () => {
        if (inputEmail.current.validity.valid) {
            setvalidEmail('')
        }
        if (inputEmail.current.validity.valueMissing) {
            setvalidEmail('Vous devez fournir une adresse email')
        }
        else if (inputEmail.current.validity.typeMismatch) {
            setvalidEmail('Veuillez fournir un email valide')
        }

    }



    const validateMessage = () => {
        if (inputMessage.current.validity.valid) {
            setvalidMessage('')
        }

        else {
            setvalidMessage('Veuillez fournir un message')
        }
    }




    return <>


        <main className="flex h-screen w-auto flex items-center ">

          

                <form className="w-96 p-6 bg-white self-start  rounded-lg shadow-lg" noValidate onSubmit={handleSubmit}>

                    <div className="flex items-center justify-center mb-4">
                        <h2 className="text-black text-2xl font-bold">Contact</h2>
                    </div>

                    <div className="mb-2 relative">
                        <label htmlFor="prenomNom" className="block mb-1 text-left font-bold">Prénom et nom</label>
                        <input type="text" ref={inputPrenomNom} required placeholder=" Armelle Nkengne Djilo" id="prenomNom" className="w-full px-3 py-2 border rounded-md" />
                        {validprenomNom && (
                            <div className="text-red-500 text-sm text-left">{validprenomNom}</div>
                        )}
                    </div>

                    <div className="mb-2 relative">
                        <label htmlFor="email" className="block mb-1 text-left font-bold">Adresse Email</label>
                        <input type="text" ref={inputEmail} required placeholder="armellenkengnedjilo@gmail.com" id="email" className="w-full px-3 py-2 border rounded-md" />
                        {validEmail && (
                            <div className="text-red-500 text-sm text-left">{validEmail}</div>
                        )}
                    </div>

                    <div className="mb-4  relative">
                        <label htmlFor="telephone" className="block mb-1 text-left font-bold">Numéro de téléphone</label>
                        <input type="text" ref={inputMessage} required placeholder="(418) 655-5537" id="telephone" className="w-full px-3 py-4 border rounded-md" />
                        {validEmail && (
                            <div className="text-red-500 text-sm text-left">{validEmail}</div>
                        )}
                    </div>





                   

                </form>

            
        </main>




    </>
}