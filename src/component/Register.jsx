import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className=" flex-col my-12 ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 mx-auto w-1/2 shadow-2xl bg-base-100 pb-10">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div>
                    <p className="text-center mt-5">Already have an account? <Link className="text-blue-600 font-bold " to='/login'>Login</Link></p>
                </div>
                
                </div>
        </div>
    );
};

export default Register;