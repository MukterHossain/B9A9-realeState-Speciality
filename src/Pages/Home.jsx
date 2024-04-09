import EstateCard from "../component/EstateCard";
import Slider from "../component/Slider";
import {useLoaderData} from 'react-router-dom';
import PropTypes from 'prop-types';


const Home = () => {
    const landData = useLoaderData()
    console.log(landData)
    return (
        <div>
            <Slider></Slider>
            <EstateCard landData={landData}></EstateCard>
        </div>
    );
};
Home.propTypes ={
    landData: PropTypes.node
}
export default Home;