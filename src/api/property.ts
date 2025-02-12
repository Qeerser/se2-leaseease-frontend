import { AxiosResponse } from "axios";
import { apiClient } from "./axios";

export const createProperty = async (
    Name: string,
    LessorID: number,
    Location: string,
    Size: string,
    Price: number,
    AvailabilityStatus: string
): Promise<string | null> => {
    try {
        const res: AxiosResponse = await apiClient.post(
            `/api/v1/properties/create`,
            JSON.stringify({
                Name,
                LessorID,
                Location,
                Size,
                Price,
                AvailabilityStatus
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return res.data
    } catch (error) {
        console.error("Error creating property:", error);
        return null;
    }
};

export const updateProperty = async (
  id: number,
  Name: string,
  LessorID: number,
  Location: string,
  Size: string,
  Price: number,
  AvailabilityStatus: string
): Promise<string | null> => {
  try {
    const res: AxiosResponse = await apiClient.put(
      `/api/v1/properties/update/${id}`,
      JSON.stringify({
          Name,
          LessorID,
          Location,
          Size,
          Price,
          AvailabilityStatus
      }),
      {
          headers: {
              "Content-Type": "application/json",
          },
      }
    );

    // Make sure to return the response data
    if (res.status === 200) {
      return "Update Successfully";
    } 
    else{
      return "Update Fail";
    }

  } catch (error) {
    console.error("Error in updating property:", error);
    return null;
  }
};

export const deleteProperty = async (
  PropertyID: number
): Promise<string | null> => {
  try {
    const res: AxiosResponse = await apiClient.delete(
      `/api/v1/properties/delete/${PropertyID}`,
    );
  } catch (error) {
    return null;
  }
  return "Delete Successfully";
};
export const getAllProperties = async (): Promise<any[]> => {
    try {
      const res: AxiosResponse = await apiClient.get("/api/v1/properties", {
        withCredentials: true,
      });
  
      // Ensure we return only the data, not the whole response object
      if (res.data && Array.isArray(res.data)) {
        return res.data;
      } else {
        // console.error("Unexpected API response format:", res.data);
        return [];
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
      return [];
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
