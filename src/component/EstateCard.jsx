import { useEffect, useState } from "react";
import EsCard from "./EsCard";


const EstateCard = () => {
    const [estates, setEstates] = useState([])

    useEffect(() =>{
        fetch('../../public/landData.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])
    console.log(estates)
    return (
        <div className="my-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Estate Section : {estates.length}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                {
                    estates.map(cards => <EsCard key={cards.id} cards={cards}></EsCard>)
                }
            </div>

        </div>
    );
};

export default EstateCard;