import { Helmet } from 'react-helmet-async';
import {useParams} from 'react-router-dom';

const EstateDetails = () => {
    const {id, image, segment_name, estate_title, description, price, status, area, location, facilities } = useParams()
    return (

        <div>
            <Helmet>
                <title>SH assets LTD || Estate Details</title>
            </Helmet>
            <h2>Estate Details{id}</h2>
            <img src={image} alt="" />
            <p>{segment_name}</p>
        </div>
    );
};

export default EstateDetails;