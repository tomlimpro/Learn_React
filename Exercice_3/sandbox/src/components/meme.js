import data from '../data/memesData'
import React from "react"
export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(data)
    function getMemeImage(){
        const memesArray= allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImage:url
        }))
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevSetMeme => ({
            ...prevSetMeme,
            [name]: value
        }))
    }
    

    return(
        <main>
            <div className="form--container">
                <input 
                    className="form--input" 
                    type="text"
                    placeholder="Top text"
                    id="top-text"
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input" 
                    type="text"
                    placeholder="Bottom text"
                    id="bottom-text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                
                <button 
                    className="form--button"
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