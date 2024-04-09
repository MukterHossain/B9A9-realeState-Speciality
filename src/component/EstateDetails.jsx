import { Helmet } from 'react-helmet-async';
import {useLoaderData,useParams} from 'react-router-dom';

const EstateDetails = () => {
    const landData = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const data = landData.find(data => data.id === idInt)

    console.log(landData, data)
    const { image, segment_name, estate_title, description, price, status, area, location, facilities } = data;
    return (

        <div>
            <Helmet>
                <title>SH assets LTD || Estate Details</title>
            </Helmet>
            <h2>Estate Details{id}</h2>
            <img src={image} alt="" />
            <p>{segment_name}</p>
            <p>Title: {estate_title}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Status : {status}</p>
            <p>Area: {area}</p>
            <p>Location: {location}</p>
            <p>Facilities: {facilities}</p>
        </div>
    );
};

export default EstateDetails;