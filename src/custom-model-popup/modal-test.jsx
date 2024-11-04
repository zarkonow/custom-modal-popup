import { useState } from "react"
import Modal from './modal.jsx'
import './modal.css'




export default function ModalTest() {
  const [showModalPopup, setshowModalPopup] = useState(false)


function handleTogglePopup(){
  setshowModalPopup(!showModalPopup)
}

function onClose() {
  setshowModalPopup(false) 
}

  return (
    <div>
      <button onClick={handleTogglePopup}>Open Modal Popup</button>
      {
        showModalPopup && <Modal
        id={'custom-id'}
        header={<p>Customized Header</p>}
        footer={<p>Customized Footer</p>}
        onClose={onClose} body={<div>Costumized Body</div>}/>
      }
    </div>
  )
}
