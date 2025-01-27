import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
    const landData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const data = landData.find(data => data.id === idInt)

    // console.log(landData, data)
    const {image, segment_name, estate_title, description, price, status, area, location, facilities } = data;
    return (

        <div>
            <Helmet>
                <title>SH assets LTD || Estate Details</title>
            </Helmet>

            <div className=" bg-green-100 p-24 rounded-2xl my-12">
                <div className=" grid grid-cols-1 lg:grid-cols-2  gap-10 ">
                    <div className=''>
                        <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='rounded-xl w-full' src={image} alt="" />
                    </div>
                    <div>
                        <h1 data-aos="flip-down" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className="text-5xl font-bold">{segment_name}</h1>
                        <h1  data-aos="zoom-in-up" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className="text-2xl pt-3 font-semibold "><span className='text-2xl font-bold '>Title:</span>  {estate_title}</h1>
                        <p data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className="pt-6 text-xl font-semibold"><span className=''>Id : 0</span>{id}</p>
                        <p data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className="pb-6"><span className='text-xl font-semibold'>Description: </span>  {description}</p>

                        <div className='grid grid-cols-1 md:grid-cols-2  py-3'>
                            <p data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic"><span className='text-xl font-semibold'>Price:</span> {price}</p>
                            <p data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic"><span className='text-xl font-semibold'>Status :</span>  {status}</p>
                        </div>
                        <hr />

                        <div className='grid grid-cols-1 md:grid-cols-2 py-3'>
                            <p data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic"><span className='text-xl font-semibold'>Area:</span>  {area}</p>
                            <p data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic"><span className='text-xl font-semibold'>Location:</span>   {location}</p>
                        </div>
                        <hr />
                        <div className='grid grid-cols-1 lg:grid-cols-2  gap-10'>
                        <p data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className='py-3'><span className='text-xl font-semibold'>Facilities:</span>
                            {facilities.map(data =>
                            <li key={data} className='ml-10 '>{data}</li>
                                
                            )}
                        </p>
                        <div className='flex items-end justify-end'>
                        <button data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className="btn bg-green-500 text-white ">{status} Now!</button>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;