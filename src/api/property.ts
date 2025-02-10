import { AxiosResponse } from "axios";
import { apiClient } from "./axios";

export const createProperty = async (
  LessorID: number,
  Location: string,
  Size: string,
  Price: number,
  AvailabilityStatus: string
): Promise<string | null> => {
  try {
    const res: AxiosResponse = await apiClient.post(
      `/api/v1/properties/create`,
      {
        LessorID: LessorID,
        Location: Location,
        Size: Size,
        Price: Price,
        AvailabilityStatus: AvailabilityStatus,
      }
    );
  } catch (error) {
    return null;
  }
  return "Create Successfully";
};
export const updateProperty = async (
  PropertyID: number,
  Price: number,
  AvailabilityStatus: string
): Promise<string | null> => {
  try {
    const res: AxiosResponse = await apiClient.post(
      `/api/v1/properties/update/${PropertyID}`,
      {
        PropertyID: PropertyID,
        Price: Price,
        AvailabilityStatus: AvailabilityStatus,
      }
    );
  } catch (error) {
    return null;
  }
  return "Update Successfully";
};
export const deleteProperty = async (
  PropertyID: number
): Promise<string | null> => {
  try {
    const res: AxiosResponse = await apiClient.post(
      `/api/v1/properties/delete/${PropertyID}`,
      {
        PropertyID: PropertyID,
      }
    );
  } catch (error) {
    return null;
  }
  return "Delete Successfully";
};
export const getAllProperties = async (): Promise<any | null> => {
  try {
    const res: AxiosResponse = await apiClient.get("/api/v1/properties", {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    return null;
  }
};
export const getPropertyByID = async (
  PropertyID: number
): Promise<any | null> => {
  try {
    const res: AxiosResponse = await apiClient.get(
      `/api/v1/properties/${PropertyID}`
    );
    return res;
  } catch (error) {
    return null;
  }
};
