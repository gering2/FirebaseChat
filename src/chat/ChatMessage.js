import secondsToDate from '../tools/secondsToDate'
import dateToDayString from '../tools/dateToDayString'
import dateToTimeString from '../tools/dateToTimeString'
import { UserOutlined } from "@ant-design/icons"

const ChatMessage = ({ message }) => {

    const { text, uid, createdAt, photoURL, displayName } = message
    try {


        return (<div class=" my-2 h-12 flex flex-row items-center ml-3">
            {/*google user vs anonymous user icon*/}
            {photoURL !== null ? <img class="shadow-lg rounded-full mt-2 h-7" src={photoURL}></img> : <div class="flex justify-center p-1  rounded-full mt-3 h-7 relative left-[2.5px]"><UserOutlined /></div>}
            <div class="ml-3 flex flex-col"><div class="flex flex-row items-end ">
                {displayName &&
                    <p class="font-semibold relative  mr-3 text-[11px]">{displayName}</p>}
                <span class="font-normal relative text-[8px] mr-1" >{dateToDayString(secondsToDate(createdAt.seconds))}</span><span class="font-normal relative text-[8px] ">{dateToTimeString(secondsToDate(createdAt.seconds))}</span>
            </div>
                <span class="font-light relative">{text}</span></div> </div>);
    }
    catch (error) {
        return null
    }
}

export default ChatMessage;