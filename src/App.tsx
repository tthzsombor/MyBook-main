import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApiContext } from './api';
import { useContext } from 'react'
import { Guest, LoggedIn } from './Components/auth';
import { LoginForm } from './Components/Login/LoginForm';
import { MainPage } from './Components/MainPage/MainPage';
import { UserProfile } from './Components/Profile/UserProfile';
import { AdminLogin } from './Components/Admin/AdminForm';
import { ProfilMainPage } from './Components/Profile/MainPage/ProfileMainPage';
import { ProfileProfile } from './Components/Profile/ProfileProfile/ProfileProfile';
import { ProfileKereses } from './Components/Profile/Keres/ProfileKeres';




function App() {
  const api = useContext(ApiContext)

  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={
           <>
           <Guest>
            <LoginForm />
          </Guest>
          <LoggedIn children={undefined}>
              {/*<h1 style={{textAlign: 'center'}}>Üdvözöljük</h1> <br />*/}
            </LoggedIn>
         {api.error ? <p>{api.error}</p> : null}
         <LoggedIn>
           <UserProfile user={api.currentUser!} />
         </LoggedIn>
         </>
        } />
        <Route path="/fooldal" element={<ProfilMainPage />}/>
        <Route path="/profil" element={<ProfileProfile />}/>
        <Route path="/kereses" element={<ProfileKereses />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/admin" element={<AdminLogin />} /> 
      </Routes>

    </BrowserRouter>
  </div>




  {/* 
  <>
     <Guest>
        <LoginForm />
      </Guest>
      <LoggedIn>
        <p>You are logged in. </p> <br />
        <button onClick={api.logout}>Log out</button>
      </LoggedIn>
      {api.error ? <p>{api.error}</p> : null}
      <LoggedIn>
        <UserProfile user={api.currentUser!} />
      </LoggedIn>
  </>
*/}

}

export default App



{/* 




<>
  <header>
  <link
    href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
    rel="stylesheet"/>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid header">
        <h1 className="navbar-brand">MyBook</h1>
       
        <div className="collapse navbar-collapse links" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to='/'></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/login'>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/admin'>Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main className='p-2 my-4'>
    <Outlet />
    </main>

    </> 





*/}










