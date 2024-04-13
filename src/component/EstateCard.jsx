// import { useEffect, useState } from "react";
import EsCard from "./EsCard";
import PropTypes from 'prop-types';


const EstateCard = ({landData}) => {
    // console.log(landData)

    
    return (
        <div className="my-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Estate Section </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                {landData.map(data=><EsCard key={data.id} data={data}></EsCard>)}
               
            </div>

        </div>
    );
};
EstateCard.propTypes ={
    landData: PropTypes.node
}

export default EstateCard;