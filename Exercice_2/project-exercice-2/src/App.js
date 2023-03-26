import './css/style.css'
import Navbar from './components/navbar'
import Data from './data/data'
import Card from './components/card'


export default function App(){
    const dataElements = Data.map(function(data){
        return(
            <Card
                key={data.id}
                item={data}
            />
        )
    })
    return(
        <>
            <div>
                <Navbar/>
                <section className="card--list">
                    {dataElements}
                </section>
            </div>
        </>
    )
}