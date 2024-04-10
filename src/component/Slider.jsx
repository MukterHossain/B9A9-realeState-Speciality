

const Slider = () => {
    return (
        <div className="my-10">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/994V39G/hospital1.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-gray-100 opacity-70">
                        <h2 data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000" className="text-5xl font-bold text-green-500 ">Hospital</h2>
                        <p className="py-4 text-lg">If you feel bad your body, you go to hospital in early.</p>
                        <button className="btn bg-green-400">Book Now!</button>
                    </div>          
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/XjtGWQN/mosque2.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-gray-100  opacity-70">
                        <h2 data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000"className="text-5xl font-bold text-green-500 ">Mosque</h2>
                        <p className="py-4 text-lg">If you feel sad your mind, you go to mosque in as soon as possible .</p>
                        <button className="btn bg-green-400">Book Now!</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/wRHDW4N/arts3.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-gray-100  opacity-70">
                        <h2 data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000"className="text-5xl font-bold text-green-500 ">Arts</h2>
                        <p className="py-4 text-lg">You go to arts gallery and refresh your mind</p>
                        <button className="btn bg-green-400">Book Now!</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/rmtWQvz/museum4.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-gray-100  opacity-70">
                        <h2 data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000"className="text-5xl font-bold text-green-500 ">Museum</h2>
                        <p className="py-4 text-lg">Museum is the relation of between past and present </p>
                        <button className="btn bg-green-400">Book Now!</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Slider;