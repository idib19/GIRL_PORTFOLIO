// import data from '../src/data.json'   //On ne peut pas import json avec module type

let data = [
    {
        "nom": "James",
        "prenom": "Bond",
        "message": "Armelle est une professionnelle douée",
   
    },
    {
        "nom": "Armelle",
        "prenom": "Alexy",
        "message": "Travailler avec Armelle fut une experience enrichissante pour moi",
       
    },
    {
        "nom": "Idrissa",
        "prenom": "Berthe",
        "message": " Armelle n'est pas du tout competente",
    },
]
// console.log(data)

export const addReviews = (req, res) => {
    const reviewInfo = req.body
    // console.log('Body',req)
    const itExists = data.find(review => review.nom === reviewInfo.nom)
    if (itExists) return res.status(403).json({ error: true, message: "L'Temoignage existe deja" })
    // data.push(reviewInfo)
    data = [...data, reviewInfo]
    res.status(200).json({ error: false, data, message: "L'Temoignage ajoute avec succes" })
}

export const ReviewList = (req, res) => {
    if (!data.length) return res.status(200).json({ error: false, message: "Pas de Temoignages dans la liste" })
    res.status(200).json({ error: false, data, message: "List des Temoignage" })
}

export const updateReview = (req, res) => {
    const { nom } = req.params
    const allreviewnoms = data.map(review => review.nom)
    if (!nom) {
        res.status(400).json({ error: true, message: "Le nom du Temoignage est requis" })
    } else if (!allreviewnoms.includes(nom)) {
        res.status(404).json({ error: true, message: "Cet Temoignage n'existe pas" })
    }
    const updatedreview = req.body
    const newData = data.map(review => {
        if (review.nom === nom) {
            return updatedreview
        }
        return review
    })

    data=[...newData]
    res.status(200).json({ error: false, message: "Temoignage mis a jour correctement" })
}

export const deleteReview = (req, res) => {
    const {nom}  = req.params
    const allreviewnoms = data.map(review => review.nom)
    if (!nom) {
        res.status(400).json({ error: true, message: "Le nom d'Temoignage est requis" })
    } else if (!allreviewnoms.includes(nom)) {
        res.status(404).json({ error: true, message: "Cet Temoignage n'existe pas" })
    }
    const newData = data.filter(review => review.nom !== nom)
    data = newData
    res.status(200).json({ message: `L'Temoignage nom ${nom} a ete supprime avec succes` })
}


export const getReviewById = (req, res) => {
    const { nom } = req.params
    const allreviewnoms = data.map(review => review.nom)
    if (!nom) {
        res.status(400).json({ error: true, message: "Le nom d'Temoignage est requis" })
    } else if (!allreviewnoms.includes(nom)) {
        res.status(404).json({ error: true, message: "Cet Temoignage n'existe pas" })
    }
    const thisreview = data.find(review => review.nom === nom)
    res.status(200).json({ error: false, data: thisreview })
}

export default data;