import { useEffect,useState } from "react"
import cardsData from 'api/cards.json'

export default function Cards() {

    const [cards,setCards] = useState([])

    useEffect(() => {
        setCards(cardsData)
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4 rounded-lg">
            {cards.length && cards.map(card => (
                <div className="bg-white p-10  shadow-md mt-10 flex flex-col justify-center items-center text-center" key={card.id}>
                    <img src={card.image} alt="" />
                    <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
                    <p className="text-gray-700 text-sm">{card.description}</p>
                </div>
            )) }
        </div>
    )
}