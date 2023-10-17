import { useEffect, useState } from 'react';

import Modal from "./Modal";
import Input from '../inputs/Input';
import Select from '../select/Select';

import { Vehicle } from '../../interfaces/Vehicle';

interface EditVehicleModalProps{
    vehicle?: Vehicle
    isOpen: boolean
    title: string
    closeModal: () => void
    onConfimation: () => void
}

const EditVehicleModal:React.FC<EditVehicleModalProps> = ({vehicle, isOpen, title, closeModal, onConfimation}) =>{

    const editVehicle = () =>{
        const updatedVehicle: Vehicle = {
            id: vehicle?.id,
            make: (document.getElementById('make') as HTMLInputElement).value,
            imges: vehicle?.imges,
            model: (document.getElementById('model') as HTMLInputElement).value,
            status: vehicle?.status,
            year: (document.getElementById("year") as HTMLSelectElement).value,
            price: (document.getElementById("price") as HTMLSelectElement).value,
        }

        // eMutate(updatedVehicle)
    }

    const addVehicle = () =>{
        const newVehicle = {
            id: Math.floor(Math.random() * (400 - 40 + 1)) + 40,
            make: (document.getElementById('make') as HTMLInputElement).value,
            model: (document.getElementById('model') as HTMLInputElement).value,
            images: (document.getElementById('images') as HTMLInputElement).value,
            year: (document.getElementById('year') as HTMLInputElement).value,
            mileage: (document.getElementById('mileage') as HTMLInputElement).value,
            price: (document.getElementById('price') as HTMLInputElement).value,
            status: (document.getElementById("status") as HTMLSelectElement).value,
            isFavourite: convertToBoolean ((document.getElementById("isFavourite") as HTMLSelectElement).value)
        }

        const data = localStorage.getItem("vehicles");
        const vehicleObj = JSON.parse(data)
        vehicleObj.push(newVehicle)
        localStorage.setItem("vehicles", JSON.stringify(vehicleObj));


    }
    

    const handleConfirmation = () => {
        if(title==="Edit vehicle"){
            editVehicle()
        }else if(title==="Add vehicle"){
            addVehicle()
        }
        closeModal()
    }
    

    const bodyContent = (
        <div className="flex flex-col gap-4">
             <Input id="make" label="Make" type="text" value={vehicle? vehicle.make: ""} required/>
             <Input id="model" label="Model" type="text" value={vehicle? vehicle.model: ""} required/>
             {title==="Add vehicle" && <Input id="images" label="Image link" type="text" required/>}
             <Input id="year" label="Year" type="number" value={vehicle? vehicle.year: ""} required/>
             <Input id="mileage" label="Mileage" type="number" value={vehicle? vehicle.mileage: ""} required/>
             <Input id="price" label="Price" type="number" value={vehicle? vehicle.price: ""} required/>
             {title==="Add vehicle" && <Select id="status" list={["Available","InProgress","Sold"]} disabled={false} text="Status"/>}
             <Select id="isFavourite" list={["true","false"]} disabled={false} text="Favourite" value={vehicle?.isFavourite}/>
        </div>
    )

    return (
        <Modal isOpen={isOpen} title={title} label="Confirm" 
        onClose={closeModal} 
        onSubmit={handleConfirmation} 
        body={bodyContent}/> 
    )
}

export default EditVehicleModal;

function convertToBoolean(input: string): boolean | undefined {
    try {
        return JSON.parse(input.toLowerCase());
    }
    catch (e) {
        return undefined;
    }
}
