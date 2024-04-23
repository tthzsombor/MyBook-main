import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApiContext } from './api';
import { useContext } from 'react';
import { Guest, LoggedIn } from './Components/auth';
import { LoginForm } from './Components/Login/LoginForm';
import { MainPage } from './Components/MainPage/MainPage';
import { UserProfile } from './Components/Profile/UserProfile';
import { AdminLogin } from './Components/Admin/AdminForm';
import { ProfilMainPage } from './Components/Profile/MainPage/ProfileMainPage';
import { ProfileProfile } from './Components/Profile/ProfileProfile/ProfileProfile';
import { ProfileKereses } from './Components/Profile/Keres/ProfileKeres';

/**
 * The root component of the React application.
 * It sets up routing and renders different components based on the URL paths.
 */
function App() {
  // Accesses the API context using the useContext hook
  const api = useContext(ApiContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<MainPage />} />

          {/* Route for handling user login */}
          <Route path="/login" element={
            <>
              {/* Renders LoginForm component for guests */}
              <Guest>
                <LoginForm />
              </Guest>
              
              {/* Renders UserProfile component for logged-in users */}
              <LoggedIn children={undefined}>
                {/* Content for logged-in users */}
              </LoggedIn>

              {/* Renders error message if API context has an error */}
              {api.error ? <p>{api.error}</p> : null}

              {/* Renders UserProfile component for the current user */}
              <LoggedIn>
                <UserProfile user={api.currentUser!} />
              </LoggedIn>
            </>
          } />

          {/* Routes for profile-related pages */}
          <Route path="/fooldal" element={<ProfilMainPage />} />
          <Route path="/profil" element={<ProfileProfile />} />
          <Route path="/kereses" element={<ProfileKereses />} />

          {/* Route for admin login */}
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
