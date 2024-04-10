import { Helmet } from "react-helmet-async";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaHandPointRight } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>SH assets LTD || Contact Us</title>
            </Helmet>
            <div className="mt-12 ">
                <div className="text-center ">
                    <h1 className="text-4xl font-bold ">Contact Us</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className=" my-12  py-12  ">
                        <div className="mx-auto  rounded-2xl shadow-2xl bg-base-100 p-10 ">
                            <div>
                                <h2 className="text-3xl font-bold py-4 text-green-800 flex items-center "><span><FaHandPointRight size={25}></FaHandPointRight></span> <span className="pl-2">Choose one</span></h2>
                            </div>
                            <hr />
                            <div>
                                <h2 className="text-2xl font-bold py-2 text-purple-950">Mobile Number</h2>
                                <p className="flex items-center pb-4 font-semibold"><span className="text-green-800"><LuPhoneCall size={25}></LuPhoneCall> </span><span className="ml-2 text-xl font-semibold ">+8801254***215</span></p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold py-2 text-purple-950">Email</h2>
                                <p className="flex items-center pb-4 font-semibold"><span className="text-green-800">< MdOutlineEmail size={25}></ MdOutlineEmail></span> <span className="ml-2 text-xl font-semibold ">shassetsltd@.gmail.com</span></p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold py-2 text-purple-950">Website</h2>
                                <p className="flex items-center pb-4 font-semibold"><span className="text-green-800"><BiWorld size={25}></BiWorld></span> <span className="ml-2 text-xl font-semibold ">www.shassetsltd.pvt.com</span></p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold py-2 text-purple-950">Facebook</h2>
                                <p className="flex items-center pb-4 font-semibold"><span className="text-green-800"><FaFacebook size={25}></FaFacebook></span> <span className="ml-2 text-xl font-semibold ">https://www.facebook.shassetsltd.com</span></p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className=" flex-col my-12   py-8">
                            <div className="card shrink-0 mx-auto  shadow-2xl bg-base-100 pb-10">
                                <form className="card-body ">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <textarea className="p-2 border-2 border-gray-300 mt-3 rounded-lg" name="message" id="" cols="50" rows="6" placeholder="Write your message"></textarea>
                                    </div>

                                    <div className="form-control mt-6 bg-yellow-200 py-2 rounded-lg">
                                        < button className="text-green-600 font-bold w-full" >Sent</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;