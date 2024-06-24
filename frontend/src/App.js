// import logo from './logo.svg';
import './App.css';
import Register from './screen/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './screen/Login/Login';
import Forgetpass from './screen/Login/Forgetpass';
import Otp from './screen/Login/Otp';
import Changepass from './screen/Login/Changepass';
import Otp1 from './screen/Register/Otp1';
import Home from './components/Home';
import { useState } from 'react';
import Allplaylist from './pages/Allplaylist';
import Allartist from './pages/Allartists';
import Allsongs from './pages/Allsongs';
import Playlist from './components/Playlist'
import Upload from './components/Upload';
import Follower from './components/Follower';
import Followings from './components/Followings'
import Navbar from './components/Navbar';
import ProfilePage from './components/ProfilePage';
import InsidePlaylist from './components/InsidePlaylist';
import Otherusers from './components/Otherusers';
import Ownprofile from './components/Ownprofile';
function App() {
  const [otpState, setOtpState] = useState()
  const [forgetotp, setforgetotp] = useState();
  const [current, setCurrent] = useState(null);
  const [username,setusername]=useState(''); 
  return (
    <div >

      <Router>
        <Routes>

          <Route path='/' element={<Register setOtpState={setOtpState} />} />
          <Route path='/login' element={<Login setusername={setusername}/>} />
          <Route path='/forget' element={<Forgetpass setforgetotp={setforgetotp} />} />
          <Route path='/otp' element={<Otp forgetotp={forgetotp} />} />
          <Route path='/change' element={<Changepass forgetotp={forgetotp} />} />
          <Route path='/otp1' element={<Otp1 otpState={otpState} />} />
          <Route path='/home' element={<Home username={username}/>} />
          <Route element={<Navbar />} >
            <Route path='/playlist' element={<Allplaylist current={current} setCurrent={setCurrent} />} />
            <Route path='/artist' element={<Allartist />} />
            <Route path='/songs' element={<Allsongs current={current} setCurrent={setCurrent} />} />
            <Route path='/player/:name' element={<Playlist />} />
            <Route path='/upload' element={<Upload />} />
            {/* <Route path='/profile' element={<ProfilePage />} /> */}
            <Route path='/profile' element={<Ownprofile username={username} />} />
            <Route path='/followings' element={<Followings username={username} />} />
            <Route path='/followers' element={<Follower username={username} />}/>
            <Route path='/allusers' element={<Otherusers username={username}/>}/>
          </Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
