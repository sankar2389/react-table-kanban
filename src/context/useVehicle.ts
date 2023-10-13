import { useContext } from 'react'
import { VehicleContext } from './VehicleContext'

export const useVehicle = () => {
  const context = useContext(VehicleContext)

  if (!context) {
    throw new Error('useVehicle must be used within a VehicleProvider')
  }

  return context
}
