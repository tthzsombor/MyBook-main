import { FormEvent, useContext, useState } from "react";
import { ApiContext } from "../../api";
import { NavBar } from "../NavBar/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'  

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loginError, setLoginError] = useState('');

  const [remail, setREmail]=useState('');
  const [rpass, setRPass]=useState('');
  const [rusername, setRUsername]=useState('');
  const [registerError, setRegisterError]= useState('');

  const api = useContext(ApiContext);

  async function login(e: FormEvent) {
    e.preventDefault();

    api.login(email, pass).then(() => {
      setLoginError('');
      setEmail('');
      setPass('');
    }).catch((e: Error) => {
      setLoginError(e.message);
    })
  }

  async function register(e: FormEvent) {
    e.preventDefault();

    api.register(remail, rusername, rpass).then(()=>{
      setRegisterError('');
      setRUsername('');
      setREmail('');
      setRPass('');
    }).catch((e:Error)=>{
      setRegisterError(e.message);
    })
  }

  function AlertL(){
    if(loginError){
      window.alert(loginError);
    }
  }

  function AlertR(){
   if(registerError){
    window.alert(registerError);
   }
   else{
    window.alert("Sikeres regisztráció!");
   }
  }




  return <>
     <div>
     <NavBar />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
      rel="stylesheet" />
    <div className="logindiv" >
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="login">
        <form onSubmit={login}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input id="input" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
          <input id="input" type="password"  placeholder="Password" value={pass} onChange={e => setPass(e.currentTarget.value)} />
          <input id="button" type="submit" value='Login' onClick={AlertL} />
        </form>
      </div>
      <div className="signup">
        <form onSubmit={register}>
          <label htmlFor="chk" aria-hidden="true">
            Sign Up
          </label>
          <input id="input" type="text"  placeholder="Email" value={remail} onChange={e=>setREmail(e.currentTarget.value)}/>
          <input id="input" type="text" placeholder="Username" value={rusername} onChange={e=>setRUsername(e.currentTarget.value)}/>
          <input id="input" type="password" placeholder="Password" value={rpass} onChange={e=>setRPass(e.currentTarget.value)}/>
          <input id="button" type="submit" value='Sign Up' onClick={AlertR}/>
        </form>
      </div>
    </div>

     </div>

    {/* 
    <p style={{textAlign: "center", color: "red", fontSize: 20}}>{loginError}</p>
    <p style={{textAlign: "center", color: "red", fontSize: 20}}>{registerError}</p>
    */}
  </>

}


