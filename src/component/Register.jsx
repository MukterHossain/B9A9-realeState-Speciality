import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form"


const Register = () => {
    const { createUser } = useContext(AuthContext);


    const {register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit= data => {
        const {email, password} = data;
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
      }

    // const handleRegister = e => {
    //     e.preventDefault();
    //     const form = new FormData(e.currentTarget);
    //     const name = form.get('name')
    //     const email = form.get('email')
    //     const password = form.get('password')
    //     const photo = form.get('photoURL')

    //     //crete User 
    //     createUser(email, password)
    //         .then(result => {
    //             console.log(result.user)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }



    return (
        <div className=" flex-col my-12 ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 mx-auto w-1/2 shadow-2xl bg-base-100 pb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("name", { required: true })}  />
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" {...register("photoURL")}/>
                        {errors.photoURL && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
                        {errors.password && <span className="text-red-600">This field is required</span>}
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