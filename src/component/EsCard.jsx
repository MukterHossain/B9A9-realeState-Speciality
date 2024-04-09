import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EsCard = ({ data}) => {
    console.log(data)
    const {id, image, segment_name, estate_title, description, price, status, area, location, facilities } = data;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <div className="card-body">
                    <img className="rounded-xl" src={image} alt="" />
                    <h2 className="card-title font-bold text-2xl">{segment_name}</h2>
                    <p><span className="font-semibold text-lg">Estate_title:</span>  {estate_title}</p>
                    <p> <span className="font-semibold text-lg">Status:</span> {status}</p>
                    <p><span className="font-semibold text-lg">Area:</span> {area}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/data/${id}`}><button  className="btn btn-primary">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
EsCard.propTypes ={
    data: PropTypes.node
}

export default EsCard;