import { useEffect, useState } from 'react';

import Modal from "./Modal";
import Input from '../inputs/Input';
import Select from '../select/Select';

import { Vehicle } from '../../interfaces/Vehicle';

interface DeleteModalProps{
    vehicle?: Vehicle
    isOpen: boolean
    closeModal: () => void
    onConfimation: () => void
}

const DeleteModal:React.FC<DeleteModalProps> = ({vehicle, isOpen, closeModal, onConfimation}) =>{


    const handleConfirmation = () => {
        closeModal()
    }
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
             <Input id="make" label="Make" type="text" value={vehicle?.make} disabled required/>
             <Input id="model" label="Model" type="text" value={vehicle?.model} disabled required/>
             {/* <Select list={["Active","Invited"]} disabled text="Status" value={vehicle?.status}/> */}
            {/*  <Select id="role" list={["Admin","Sales Leader", "Sales Rep"]} disabled text="Role" value={vehicle?.role}/> */}
        </div>
    )

    return (
        <Modal disabled={false} isOpen={isOpen} title="Delete Vehicle" label="Confirm" 
        onClose={closeModal} 
        onSubmit={handleConfirmation} 
        body={bodyContent}/>
    )
}

export default DeleteModal;