import '../css/main.css'
import Infos from './Infos'
import Buttons from './Buttons'
import Details from './Details'
import Footer from './Footer'

export default function MainContent(){
    return(
        <main>
            <div className="main--profile">
                <div className="main--wrapper">
                    <img className="main--photo" src="./luffy-profile.jpeg" alt="main_photo"></img>
                    <Infos/>
                    <Buttons/>
                    <Details/>  
                </div>
                <Footer/>
            </div>
        </main>
        
    )
}

