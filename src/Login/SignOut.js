import firebase from 'firebase/compat/app'
import { Button } from '@material-tailwind/react';

const SignOut = ({ auth }) => {
    return (auth.currentUser && (
        <div onClick={() => auth.signOut()}> Sign Out</div>
    ));
}

export default SignOut
