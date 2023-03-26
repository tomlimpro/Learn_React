import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import data from './data/data'
import './css/style.css'


export default function App(){

    const dataElements = data.map(function(data){
        return(
            <Card
                key={data.id}
                data={data}
            />
        )
    })
    return(
        <>
            <div>
                <Navbar/>
                <Hero />
                <section className="card--lists">
                    {dataElements}
                </section>
            </div>
        </>
    )
}