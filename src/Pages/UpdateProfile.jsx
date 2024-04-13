import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import 'animate.css';


const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (

        <div>
            <Helmet>
                <title>SH assets LTD || Update Profile</title>
            </Helmet>
            <div className=" my-12 bg-slate-100 p-12 rounded-xl">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold pb-8 animate__animated animate__fadeInDown animate__slow">Update Your Profile</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="w-full shadow-2xl rounded-2xl animate__fadeInLeft animate__slow pb-5">
                        <div className=" rounded-full py-4">
                            <img className="w-2/5 mx-auto rounded-lg animate__animated animate__zoomIn" src={user?.photoURL || "https://i.ibb.co/V2JRhyS/mosque.jpg"} />
                            <div className="ml-16 pt-5">
                                <h2 className="text-xl font-medium animate__animated animate__slideInDown animate__slow">Name: {user?.displayName || 'User name not found'}</h2>
                                <h2 className="text-xl font-medium animate__animated animate__slideInUp animate__slow">Email: {user?.email || 'User email not found'}</h2>
                            </div>
                        </div>

                    </div>
                    <div className="animate__animated animate__fadeInRight animate__slow">
                        <div className="card shrink-0 mx-auto w-full shadow-2xl bg-base-100 pb-10 ">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6 bg-yellow-200 py-2 rounded-lg">
                                    < button className="text-green-600 font-bold w-full" >Update</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UpdateProfile;