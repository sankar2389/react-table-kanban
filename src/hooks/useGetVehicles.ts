
export const useGetVehicles = () => {
    // console.log(query);
    const data = localStorage.getItem("vehicles");
    const vehicleObj = JSON.parse(data)
    return [...vehicleObj];
}