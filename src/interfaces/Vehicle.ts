export interface User{
    id?: number
    make: string
    model: string
    images?: string
    price: number
    year: number
    mileage: number
    status: string
    isFavourite?: boolean
}