import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EsCard = ({ data}) => {
    console.log(data)
    const {id, image, segment_name, estate_title, price, status, area } = data;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <div className="card-body">
                    <img className="rounded-xl" data-aos="fade-right" data-aos-duration="1000" src={image} alt="" />
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="card-title font-bold text-2xl">{segment_name}</h2>
                    <p data-aos="zoom-in-left " data-aos-duration="1000"><span className="font-semibold text-lg" >Estate_title:</span>  {estate_title}</p>
                    <p data-aos="zoom-in-left " data-aos-duration="1000"> <span  className="font-semibold text-lg">Status:</span> {status}</p>
                    <p data-aos="zoom-in-left " data-aos-duration="1000"><span className="font-semibold text-lg">Area:</span> {area}</p>
                    <p data-aos="zoom-in-left " data-aos-duration="1000"><span className="font-semibold text-lg">Price:</span> {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/data/${id}`}><button data-aos="zoom-in" className="btn bg-green-500 text-lg font-semibold">View Property</button></Link>
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