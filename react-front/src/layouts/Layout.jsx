import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Resumen from "../components/Resumen"

import useAppContext from "../hooks/useAppContext"

import ModalProducto from "../components/ModalProducto"

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root');

export default function Layout() {
  
  const {modal,handleClickModal} = useAppContext();

  return (
    <>
        <div className="md:flex">
        <Sidebar />

        <main className="flex-1 h-screen overflow-y-auto bg-gray-100 p-5">
          <Outlet />
        </main>
        
        <Resumen />
        </div>


        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalProducto/>
        </Modal>

    </>
  )
}
