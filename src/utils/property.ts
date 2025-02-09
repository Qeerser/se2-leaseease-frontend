import { AxiosResponse } from 'axios';
import { apiClient } from './axios';

export const createProperty = async (
    Location: string,
    Size: string,
    Price: number,
    AvailabilityStatus: string
): Promise<string | null> => {
    try {
        const res: AxiosResponse = await apiClient.post(
          `/property/create`,
            {
                LessorID: "hi",     
                Location: Location,
                Size: Size,
                Price: Price, 
                AvailabilityStatus: AvailabilityStatus
            },
          
        );
    
    }catch (error) {
        return null;
    }
    return "Create Successfully"
    }
export const updateProperty = async (
    PropertyID: number,
	Price: number,
	AvailabilityStatus: string 
):Promise<string | null> => {
    try {
        const res: AxiosResponse = await apiClient.post(
          `/property/update/${PropertyID}`,
            {
                PropertyID: PropertyID,
                Price: Price, 
                AvailabilityStatus: AvailabilityStatus
            },
          
        );
    
    }catch (error) {
        return null;
    }
    return "Update Successfully"
    }
export const deleteProperty = async (
    PropertyID: number,
):Promise<string | null> => {
    try {
        const res: AxiosResponse = await apiClient.post(
            `/property/delete/${PropertyID}`,
            {
                PropertyID: PropertyID
            },
            
        );
    
    }catch (error) {
        return null;
    }
    return "Delete Successfully"
    }
    