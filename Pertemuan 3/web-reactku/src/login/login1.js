import React from "react";
import './login.css';

const Login = () =>{
    return (
        <div class="kotak_login">
            <center><h1>Form Login</h1></center>
            <p class="tulisan_login">Silahkan login</p>

            <form>
                <label>Username</label>
                <input type="text" name="username" class="form_login" placeholder="Username atau email .."/>

                <label>Password</label>
                <input type="text" name="password" class="form_login" placeholder="Password .."/>

                <input type="submit" class="tombol_login" value="LOGIN"/>

                <p><input type='checkbox' name='remember_me' value='Remember Me' />Remember Me</p>

                
                <input type="submit" class="tombol_cancel" value="Cancel"/>

                <br/>
                <br/>
               
            </form>
            
        </div>
    );
}

export default Login;