import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    return (
        <div>
            <Helmet>
                <title>SH assets LTD || Update Profile</title>
            </Helmet>
            <div className=" flex-col my-12 bg-slate-100 py-12">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold pb-8">Update Your Profile</h1>
                </div>
                <div className="card shrink-0 mx-auto w-1/2 shadow-2xl bg-base-100 pb-10">
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
    );
};

export default UpdateProfile;