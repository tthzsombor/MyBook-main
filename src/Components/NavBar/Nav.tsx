import { Link } from "react-router-dom";
import './Nav.css'



export function NavBar() {



  return (
    <>
  <header>
  <link
    href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
    rel="stylesheet"/>
    <nav className="header">
      <div className="logo">
        <h1>MyBook</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link className="link" to='/'>Kezdőlap</Link>
            </li>
            <li>
              <Link className="link" to='/login'>Login</Link>
            </li>
            <li>
              <Link className="link" to='/admin'>Admin</Link>
            </li>
          </ul>
        </div>
    </nav>
  </header>
    </>


  );
};


{/* 
      <Navbar sticky="top" expand="md">
              <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav>
                          <Link to="/">Főoldal</Link>
                          <Link to="/login">Login</Link>
                          <Link to="/admin">Admin</Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar></>
          */}

{/*


export function Nav(){
     return<>
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
 
    
}
 */}