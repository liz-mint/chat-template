import React, { useState } from 'react'
import ModalAddNew from './modal-add-channel'

const ButtonAddNew = () => {
  const [isModalOpen, changeIsModalOpen] = useState(false)
  const onModalClose = () => {
    changeIsModalOpen(!isModalOpen)
  }
  const onAddNew = () => {
    changeIsModalOpen(!isModalOpen)
  }
  return (
    <div
      onClick={() => changeIsModalOpen(!isModalOpen)}
      onFocus={() => changeIsModalOpen(!isModalOpen)}
    >
      <PlusSVG />
      <ModalAddNew isOpen={isModalOpen} onCancel={onModalClose} onSubmit={onAddNew} />
    </div>
  )
}

export default ButtonAddNew
