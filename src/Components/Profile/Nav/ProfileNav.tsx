import './ProfileNav.css'
import '../User'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ApiContext } from '../../../api'
import { User } from '../User'

interface Props {
    user: User;
}

function openNav() {
    document.getElementById("mySidenav")!.style.width = "270px";
    document.getElementById("main")!.style.marginLeft = "270px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }


export function ProfileNav({ user }: Props) {
    const api = useContext(ApiContext)

    return <>
   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div id="mySidenav" className="sidenav">
       <h3 className='user'>{user.username}</h3>    
      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
        ×
      </a>
      <Link className="fa fa-fw fa-home" to={'/fooldal'}>Főoldal</Link>
      <Link className="nav-link fa fa-fw fa-user" to={'/profil'}>Profil</Link>
      <Link className="nav-link fa fa-fw fa-search" to={'/kereses'}>Keresés</Link>
      <Link className='nav-link fa fa-fw fa-sign-out' to={'/login'} onClick={api.logout}>Kijelentkezés</Link>
    </div>
    <div id="main">
      <span style={{ fontSize: 30, cursor: "pointer" }} onClick={openNav} onDoubleClickCapture={closeNav}>☰</span>
    </div>
  </>
    
    
}



{/*
    <>
            <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
            <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
            <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
            <link href="assets/css/style.css" rel="stylesheet" />

            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <h3 className='name'>
                            {user.username}
                        </h3>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li>
                                <Link className="nav-link" to={'/fooldal'}>Főoldal</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to={'/profil'}>Profil</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to={'/kereses'}>Keresés</Link>
                            </li>
                            <li>
                                <Link className='nav-link' to={'/login'} onClick={api.logout}>Kijelentkezés</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
 */}