import { useState } from "react"
import Modal from './modal.jsx'




export default function ModalTest() {
  const [showModalPopup, setshowModalPopup] = useState(false)


function handleTogglePopup(){
  setshowModalPopup(!showModalPopup)
}

  return (
    <div>
      <button onClick={handleTogglePopup}>Open Modal Popup</button>
      {
        showModalPopup&& <Modal/>
      }
    </div>
  )
}
