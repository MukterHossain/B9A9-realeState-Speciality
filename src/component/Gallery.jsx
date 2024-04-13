import { Link } from "react-router-dom";
import 'animate.css';




const Gallery = () => {
    return (
        <div className="mt-24 mb-12">
            <div>
                <h2 className="text-4xl text-center font-bold text-green-600 animate__animated animate__zoomIn">Photo Gallery</h2>
            </div>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full"  src={`https://i.ibb.co/0Mr68bP/hospital1.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-200 animate__animated animate__lightSpeedInLeft animate__slow">SARASOTA MEMORIAL HOSPITAL</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >1/5, BSP Road, WD, USA  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full" src={` https://i.ibb.co/SNb5B97/hospital2.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-200 animate__animated animate__lightSpeedInLeft animate__slow">SARAB CENTRAL HOSPITAL</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >New TRI Road, Alpash, USA  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            {/* mosque */}
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full"  src={`https://i.ibb.co/LpYMkFP/mosque1.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-200 animate__animated animate__lightSpeedInLeft animate__slow">AHSAN BOKHARA MOSQUE</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >Twelid, linked Road, Broney  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full"  src={`https://i.ibb.co/5GMftTk/mosque2.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-200 animate__animated animate__lightSpeedInLeft animate__slow">GIUSUDDIN CENTRAL MOSQUE</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >New Baw Road, Pakistan  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* park1*/}
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full" src={`https://i.ibb.co/z8hB0QW/park1.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-100  animate__animated animate__lightSpeedInLeft animate__slow">HOLY VBIK PARK</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >Awkted Road, 3/12, DSP, Australia  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full"  src={`https://i.ibb.co/dbHxfSX/park2.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-100 animate__animated animate__lightSpeedInLeft animate__slow">PIKBI NEW PARK</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >Mireed street Road, Aukland  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* science1*/}
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full" src={`https://i.ibb.co/2yQddXn/science1.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-100 animate__animated animate__lightSpeedInLeft animate__slow">AMI SPACE CENTER</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >ATR Street Road, Ndished, UK  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full"  src={`https://i.ibb.co/mC2CpSW/science2.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-100 animate__animated animate__lightSpeedInLeft animate__slow">ANCIENT AIR SHIP</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >Patabiye, TNP Road, Norwaye  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* art1*/}
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full" src={`https://i.ibb.co/m643f8M/art1.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-500 animate__animated animate__lightSpeedInLeft animate__slow">WSSPHI CENTRAL ART GALLERY</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >New Fist Road, TreeBlog, France  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full" src={`https://i.ibb.co/PwV0XTy/art2.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-100 animate__animated animate__lightSpeedInLeft animate__slow">MAMPEU CENTRAL ART</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >2/6, Mampeu, Japan   </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* transport1 */}

                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full" src={`https://i.ibb.co/T2PTHxw/transport1.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-900 animate__animated animate__lightSpeedInLeft animate__slow">XIEOX AIR PORT</h2>
                                <p className="font-semibold text-lg text-center text-black py-2 animate__animated animate__lightSpeedInRight animate__slow" >Pasinotie, SIP Road, China  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* school2*/}
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full"  src={`https://i.ibb.co/KKXgvpQ/school1.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-100 animate__animated animate__lightSpeedInLeft animate__slow">TAHIB NATIONAL SCHOOL</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >New Beshiyenu, Axi Road, Thailand </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full"  src={`https://i.ibb.co/G5S3jkp/school2.jpg `} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-200 animate__animated animate__lightSpeedInLeft animate__slow">TATARLAND OPEN SCHOOL</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >4/6, Tatarland, swserland BSP Road, WD, USA  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* convention2 */}
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full"  src={`https://i.ibb.co/5BkjCn1/convention1.jpg`} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-100 animate__animated animate__lightSpeedInLeft animate__slow">DREAM CONVENTION CENTER</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >6/2 Green Road, WD, USA  </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-x animate__animated animate__rotateIn animate__slow" >
                    <div className="relative  w-full">
                        <img className="rounded-xl w-full"  src={`https://i.ibb.co/BnXXkNV/convention2.jpg `} alt="" />
                        <div className="absolute top-1/3 w-full flex flex-col justify-center items-center ">
                            <div className=" w-full p-5 ">
                                <h2 className=" font-bold text-2xl text-center text-blue-200 animate__animated animate__lightSpeedInLeft animate__slow">MOUNT SHOW CENTER</h2>
                                <p className="font-semibold text-lg text-center text-white py-2 animate__animated animate__lightSpeedInRight animate__slow" >APK Loafi, 1/2 Road, UK </p>
                                <div className="flex justify-center">
                                    <Link to='/contact'><button data-aos="zoom-in" className="btn bg-green-500 btn-sm text-lg font-semibold animate__animated  animate__flip animate__slow">Contact</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

      

            </div>
        </div>
    );
};

export default Gallery;