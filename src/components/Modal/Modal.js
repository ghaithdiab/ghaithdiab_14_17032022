import React from 'react'
import './Modal.css'
const Modal = () => {
  const closeModal=()=>{
    document.getElementsByClassName('my-modal')[0].style.display='none'
  }
  return (
    <div className='my-modal' onClick={()=>closeModal()}>
      <div className='modal-content'>
        <span className='close' onClick={()=>closeModal()}>&times;</span>
        <p>Employee successfully created</p>
      </div>
    </div>
  )
}

export default Modal