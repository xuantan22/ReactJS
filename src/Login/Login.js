/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import React, { useRef, useEffect, useState } from "react";
import styles from './Login.module.scss';
import Button from "~/components/Button";
import axios from '~/utils/request';

const LOGIN_URL ='/auth';
const cx= classNames.bind(styles);

const Login = ()  => {

        const userRef = useRef();
        const errRef = useRef();


        const [user, setUser] = useState('');
        const [pwd, setPwd] = useState('');
        const [errMsg, setErrMsg] = useState('');
        const [success, setSuccess] = useState(false);

        useEffect(() => {
            userRef.current.focus();
        },[])

        useEffect(() => {
            setErrMsg('');
        },[user, pwd])


        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const reponse = await axios.post(LOGIN_URL,
                    JSON.stringify({user, pwd}),
                    {
                        headers: {'Content-Type':'application/json'},
                        withCredentials:true
                    }
                    );
                    ///?
                    console.log(JSON.stringify(reponse.data));
                    console.log(JSON.stringify(reponse))
                    const accessToken =reponse.data.accessToken;
                    const roles = reponse.data.roles;


                setUser('');
                setPwd('');
                setSuccess(true);
            }catch(err) {
                if(!err?.reponse) {
                    setErrMsg('No Server Response');
                }else if (err.reponse.status === 400){
                    setErrMsg('Missing Username or Password');
                }else if (err.reponse.status === 401){
                    setErrMsg('unauthorized');
                }else {
                    setErrMsg('Login Failed')
                }
                errRef.current.focus();
            }
        }

        
        return (
            <div className={cx('wrapper')}>
            { success ? (
                <section>

                <h1>Youa are logged in!</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
                </section>
            ): (
            <section>
                <p
                 ref={errRef} className={cx(errMsg ? "errmsg" : "offscreen")}
                aria-live="assertive">{errMsg}
                </p>
                <form onSubmit={handleSubmit} className={cx('form-login')}>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        className={cx('username')}
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        />

                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        className={cx('password')}
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        />
                        <Button className={cx('signin-btn')} to='/' >Sign In</Button>
                </form>
                <p className={cx('signup-creatacc')}>
                   <span className={cx('acc-creat')}>Need an Account?</span><br />
                    <span className={cx('line')}>
                        {/*put router link here*/}
                        <a href="#">Sign Up</a>
                    </span>
                </p>
            </section>
            )}
            </div>
            
        )
        
}

export default Login;