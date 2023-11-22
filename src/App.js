import './App.css';
import ChatRoom from './chat/ChatRoom';
import SignIn from './Login/SignIn';
import SignOut from './Login/SignOut';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, app, provider } from './config/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Card } from '@material-tailwind/react';
import SettingsPanel from './panels/SettingsPanel';
import ActiveUsers from './panels/ActiveUsers'

function App() {
  const [user] = useAuthState(auth);
  return (<>
    {user ? <div class="flex text-dark-200 h-full w-full  bg-dark-900">

      <div class="bg-dark-900 basis-[10%] p-3"><SettingsPanel auth={auth}></SettingsPanel>
      </div>
      <div class="bg-dark-800 basis-[80%] "><ChatRoom firestore={db} auth={auth} /></div>
      <div class="bg-dark-900"><ActiveUsers firestore={db}></ActiveUsers></div></div> :
      <div class=" flex text-dark-200 h-full w-full bg-dark-900  justify-center"><SignIn firestore={db} provider={provider} auth={auth} /></div>
    }  </>)
}

export default App;
