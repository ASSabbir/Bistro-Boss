import './login.css'
import img from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';

const Login = () => {
    const captchaRef= useRef(null)
    const [disableFlag,setDisableFlag]=useState(true)
    const [hideFlag,setHideFlag]=useState(false)
    
    useEffect(()=>{
        loadCaptchaEnginge(6);
     },[])

    const handelLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const pass=e.target.pass.value 
        console.log(email,pass)
    }

    const handelCaptcha= () =>{
        const value=captchaRef.current.value
        if (validateCaptcha(value)==true) {
            setDisableFlag(false)
            setHideFlag(true)
        }
   
        else {
            alert('Captcha Does Not Match');
            setDisableFlag(true)
        }
    }
    return (
        <div id='login-container' className="hero  min-h-screen">
            <div className="hero-content border-2 shadow-xl md:p-40 md:gap-24 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" className='w-full shrink-0' />
                </div>
                <div className="card  w-full max-w-sm shrink-0 ">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='pass' placeholder="password" className="input " required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            
                        </div>
                        <div  className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate  />
                            </label>
                            <input type="text" name='captcha' ref={captchaRef} placeholder="Write the Captcha" className="input " required />
                            <button  onClick={handelCaptcha} className='btn btn-outline btn-xs border-none mt-5 hover:text-[#D1A054] hover:bg-transparent text-white bg-[#D1A054]'>Validate</button>
                            
                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disableFlag} className="btn hover:text-[#D1A054] hover:bg-transparent text-white bg-[#D1A054]" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;