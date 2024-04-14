import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="text-center p-10 bg-blue-100 ">

            <div className="">
                <div className="flex items-center justify-center">
                    <img className="pr-2 " src={'https://i.ibb.co/R3MGnQq/logo2.png'} alt="" />
                    <span className=" text-xl font-bold text-blue-800">assets LTD</span>
                </div>
               

                
                <div className="">

                    <p className="text-xl font-semibold py-4">A Trustworthy Real Estate Company since 2000</p>
                    <hr className="md:w-1/2 mx-auto border-blue-200 py-3 " />
                    <div className="flex justify-center items-center gap-5 pb-4">
                        <FaFacebook size={25}></FaFacebook>
                        <FaGoogle size={25}></FaGoogle>
                        <FaGithub size={25}></FaGithub >
                    </div>
                    <hr className="md:w-1/2 mx-auto border-blue-200 py-3 " />
                    <p><small>Copyright © 2024 - All right reserved SH assets LTD</small></p>

                </div>
                
            </div>
        </footer>
    );
};

export default Footer;