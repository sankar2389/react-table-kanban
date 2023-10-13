import { nanoid } from 'nanoid'
import React, { createContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'

interface VehicleContextProps {
  vehicles: Vehicle[]
  addVehicle: (text: string) => void
  deleteVehicle: (id: string) => void
  editVehicle: (id: string, text: string) => void
  updateVehicleStatus: (id: string) => void
}

export interface Vehicle {
  id: string
  text: string
  status: 'undone' | 'completed'
}

export const VehicleContext = createContext<VehicleContextProps | undefined>(
  undefined,
)

export const VehicleProvider = (props: { children: React.ReactNode }) => {
  const [vehicles, setVehicles] = useLocalStorage<Vehicle[]>('vehicles', [])

  // add new Vehicle method
  const addVehicle = (text: string) => {
    const newVehicle: Vehicle = {
      id: nanoid(),
      text,
      status: 'undone',
    }

    setVehicles([...vehicles, newVehicle])
  }

  // delete Vehicle method
  const deleteVehicle = (id: string) => {
    setVehicles(prevVehicles => prevVehicles.filter(Vehicle => Vehicle.id !== id))
  }

  // update/edit Vehicle method
  const editVehicle = (id: string, text: string) => {
    setVehicles(prevVehicles => {
      return prevVehicles.map(Vehicle => {
        if (Vehicle.id === id) {
          return { ...Vehicle, text }
        }
        return Vehicle
      })
    })
  }

  // status Vehicle method
  const updateVehicleStatus = (id: string) => {
    setVehicles(prevVehicles => {
      return prevVehicles.map(Vehicle => {
        if (Vehicle.id === id) {
          return {
            ...Vehicle,
            status: Vehicle.status === 'undone' ? 'completed' : 'undone',
          }
        }
        return Vehicle
      })
    })
  }

  const value: VehicleContextProps = {
    vehicles,
    addVehicle,
    deleteVehicle,
    editVehicle,
    updateVehicleStatus,
  }

  return (
    <VehicleContext.Provider value={value}>{props.children}</VehicleContext.Provider>
  )
}
