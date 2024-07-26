import {  createContext, useState } from "react";


 export const ModalContext = createContext({
 isOpenModal:false,
 openModalHandler:()=>{},
 closeModalHandler:()=>{},

 })



 export const ModalProvaider=({children})=>{

    const [isOpenModal,setIsOpenModal]=useState(false)

    const openModalHandler=() => {
    setIsOpenModal(true)
    }
    const  closeModalHandler=()=>{
      setIsOpenModal (false)
    }


    const contextValue={
        isOpenModal,
        openModalHandler,
        closeModalHandler,
    }

    return<ModalContext.Provider value={contextValue}>
        {children}
    </ModalContext.Provider>
 }