'use server'

import { IPhoto } from "../interfaces/photo.interface"

export const getPhotos = async (): Promise<IPhoto[]> => {
    const response = await fetch('https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0')
    const data = await response.json()
    return data as IPhoto[]
}