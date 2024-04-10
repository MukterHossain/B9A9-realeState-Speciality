import EstateCard from "../component/EstateCard";
import Slider from "../component/Slider";
import {useLoaderData} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet} from 'react-helmet-async'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Home = () => {
    const landData = useLoaderData()
    console.log(landData)
    return (
        <div>
            <Helmet>
                <title>SH assets LTD || Home</title>
            </Helmet>
            <Slider></Slider>
            <EstateCard landData={landData}></EstateCard>
            
        </div>
    );
};
Home.propTypes ={
    landData: PropTypes.node
}
export default Home;