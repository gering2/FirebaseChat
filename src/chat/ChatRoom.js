import ChatMessage from './ChatMessage';
import firebase from 'firebase/compat/app';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useState, useRef } from 'react';
import { uuidv4 } from '../tools/uuid';
import { doc, setDoc, collection, orderBy, query, limit, onSnapshot } from 'firebase/firestore';


const ChatRoom = ({ auth, firestore }) => {
    const dummy = useRef();
    const [messageFormValue, setMessageFormValue] = useState('');
    const messagesReference = collection(firestore, 'messages');
    const sendMessage = async (e) => {
        e.preventDefault();
        if (messageFormValue.length > 75) {
            return;

        }
        var { uid, photoURL, displayName } = auth.currentUser;
        if (auth.currentUser.displayName === null) {
            displayName = "Guest"
        }
        await setDoc(doc(firestore, "messages", uuidv4()), {
            text: messageFormValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            displayName
        })

        setMessageFormValue('');

    }

    onSnapshot(collection(firestore, "messages"), () => {
        if (dummy.current) {
            dummy.current.scrollIntoView({ behavior: 'smooth' });
        }
    });
    const q = query(messagesReference, orderBy('createdAt', "desc"), limit(50))
    const [messages] = useCollectionData(q, { idField: 'id' })

    return (
        <div class="flex flex-col  w-full bg-neutral-300 max-h-full mr-1 ">
            <div class=" flex flex-col justify-stretch overflow-auto mt-4">
                {messages && messages.reverse().map((message) => {
                    return <ChatMessage displayName={message.displayName} key={message.uid} message={message} />
                })}
                <span ref={dummy}></span>

            </div>

            <form class="relative bottom-4 mt-5 max-h-[5%] flex justify-center w-full items-center  " onSubmit={sendMessage} >
                <input variant="outlined" class="text-dark relative top-2 font-light bg-dark-600 outline-none focus:ring-0 pl-4 px-2 py-2 rounded-md w-[98%]" value={messageFormValue} onChange={(e) => setMessageFormValue(e.target.value)}></input>

            </form>

        </div>
    )
}

export default ChatRoom;

