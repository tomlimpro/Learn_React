import React from "react"
export default function Meme(){

    /**
    * Définit la propriété de mon objet Meme et permet de changer son état à chaque fois qu'on génère une nouveau Meme
    * Identifier => 
    * TopText : Texte qui sera inscrit au-dessus de la page, va changer d'état
    * BottomText : Texte qui sera inscrit en-dessous de la page, va changer d'état
    * url : l'url du meme, on initalise au début.
    */
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage :"http://i.imgflip.com/1bij.jpg"
    })

    /**
     * Liste des Memes qu'on récupère à partir de l'API
     */
    const [allMeme,setAllMeme] = React.useState([])

    /**
     * Utilisation de useEffect pour gérer l'API Meme
     * useEffect(function async, dependance)
     * getMeme() est une fonction asynchrone qui va s'exécuter en background pendant que le code principal tourne.
     * on récupère l'api into json
     * puis l'objet est inséré dans la liste allMeme
     * on a une liste d'objet dans allMeme
     */

    React.useEffect(()=>{
        async function getMeme(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
        }
        getMeme()
    },[])

    /**
     * getMemeImage() génère aléatoirement l'url 
     *  Le Spread Operator permet d'étendre un objet
     *  Ici, on remplace l'identifier randomImage par le nouveau url généré aléatoirement 
     */

    function getMemeImage(){
        const randomnNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomnNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    /**
     * handleChange(event) s'exécute lorsqu'un évènement est déclenché
     * Ici, l'évènement est lorsqu'on insère une valeur aux Input
     * On récupère chaque Input grâce au "name" de l'input
     * On récupère la valeur associée "value" 
     * Puis grâce au Spread Operator, on vient remplacer la valeur dynamiquement
     */
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }
    return(
        <main>
            <div className="form--container">
                <input 
                    className="form--input" 
                    type="text"
                    placeholder="Top text"
                    // name,value,onChange IMPORTANT pour afficher en temps réel les nouvelles valeurs
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input" 
                    type="text"
                    placeholder="Bottom text"
                    // name,value,onChange IMPORTANT pour afficher en temps réel les nouvelles valeurs
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}

                />

                
                <button 
                    className="form--button"
                    // event click button
                    onClick={getMemeImage}
                >Get a new meme image 🖼
                </button>
            </div>
            <div className="meme--container">
                <img src={meme.randomImage} alt="memes" className='meme--image'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}