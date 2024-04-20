import { FormEvent, useContext, useState } from "react";
import { ApiContext } from "../../api";
import { NavBar } from "../NavBar/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import '../Login/Login.css';


export function AdminLogin() {
    const [adminname, setAdminname] = useState('');
    const [pass, setPass] = useState('');
    const [loginError, setLoginError] = useState('');

    const api = useContext(ApiContext);

    async function login(e: FormEvent) {
        e.preventDefault();

        api.login(adminname, pass).then(() => {
            setLoginError('');
            setAdminname('');
            setPass('');
        }).catch((e: Error) => {
            setLoginError(e.message);
        })
    }

    return  <>
       <NavBar />
       <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
      rel="stylesheet" />
    <div className="main" style={{marginTop: 113}}>
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="login">
        <form onSubmit={login}>
          <label htmlFor="chk" aria-hidden="true">
            Admin
          </label>
          <input id="input" type="text" name="txt" placeholder="Username"/>
          <input id="input" type="password" name="pswd" placeholder="Password"/>
          <input id="button" type="submit" value='Login' />
        </form>
      </div>
    </div>
    <p>{loginError}</p>
  </>
  
}




