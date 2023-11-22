import { collection } from "firebase/firestore";
import DetectConnections from "./DetectConnections";
const ActiveUsers = ({ firestore }) => {
    const usersReference = collection(firestore, 'users')
    //<div><DetectConnections firestore={firestore}></DetectConnections></div>
    return (<div></div>);
}

export default ActiveUsers;