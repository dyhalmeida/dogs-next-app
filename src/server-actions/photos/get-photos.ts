'use server'

import { BASE_URL, RESOURCE } from "@/constants/api"
import { IPhoto } from "../interfaces/photo.interface"

export const getPhotos = async (): Promise<IPhoto[]> => {
    const response = await fetch(`${BASE_URL}/${RESOURCE.PHOTOS}`)
    const data = await response.json()
    return data as IPhoto[]
}