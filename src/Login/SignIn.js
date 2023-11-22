import { signInWithPopup } from "firebase/auth";
import { Button } from "@material-tailwind/react";
import 'firebase/compat/auth';
import 'firebase/database'
import 'firebase/compat/firestore';
import { signInAnonymously } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { useState } from "react";

const SignIn = ({ auth, provider, firestore }) => {
  const [usersConnected, setUsersConnected] = useState([]);
  const handleGuestLogin = async () => {
    const res = await signInAnonymously(auth)
    await setDoc((doc(firestore, "users", res.user.uid)), {
      displayName: "Guest"
    })
    //addOnlinePresence(res.user.uid)
  }
  const handleGoogleLogin = async () => {
    const res = await signInWithPopup(auth, provider)
    await setDoc((doc(firestore, "users", res.user.uid)), {
      displayName: res.user.displayName
    })
    //addOnlinePresence(res.user.id)
  }


  return (
    <div class="flex flex-col px-8 bg-dark-900 rounded-md w-[30%] min-h-[40%] justify-center items-center gap-10">
      <Button color="light-green" onClick={handleGoogleLogin}>Sign in  with google</Button>
      <Button color="light-green" class="text-sm" onClick={handleGuestLogin}>Sign in as guest</Button>
    </div>
  )
}

export default SignIn