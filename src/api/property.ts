import { AxiosResponse } from "axios";
import { apiClient } from "./axios";

//  Define Backend Response Type
interface ApiResponse<T> {
	status_code: number;
	message: string;
	data?: T;
}

//  Create a Property
export const createProperty = async (
	Name: string,
	Location: string,
	Detail: string,
	Size: string,
	Price: number,
	AvailabilityStatus: string
): Promise<string | null> => {
	try {
		const res: AxiosResponse<ApiResponse<null>> = await apiClient.post(
			"properties/create",
			{
				Name,
				Location,
				// Detail,
				Size,
				Price,
				AvailabilityStatus,
			}
		);

		return res.data.message || "Create Successfully";
	} catch (error: any) {
		console.error(
			"Error creating property:",
			error.response?.data?.message || error.message
		);
		return null;
	}
};

//  Update a Property
export const updateProperty = async (
	id: number,
	Name: string,
	Location: string,
	Size: string,
	Price: number,
	AvailabilityStatus: string
): Promise<string | null> => {
	try {
		const res: AxiosResponse<ApiResponse<null>> = await apiClient.put(
			`properties/update/${id}`,
			{
				Name,
				Location,
				Size,
				Price,
				AvailabilityStatus,
			}
		);

		return res.data.message || "Update Successfully";
	} catch (error: any) {
		console.error(
			"Error updating property:",
			error.response?.data?.message || error.message
		);
		return null;
	}
};

//  Delete a Property
export const deleteProperty = async (
	PropertyID: number
): Promise<string | null> => {
	try {
		const res: AxiosResponse<ApiResponse<null>> = await apiClient.delete(
			`properties/delete/${PropertyID}`
		);

		return res.data.message || "Delete Successfully";
	} catch (error: any) {
		console.error(
			"Error deleting property:",
			error.response?.data?.message || error.message
		);
		return null;
	}
};

interface data {
	properties: any[];
	total_records: number;
	total_pages: number;
	current_page: number;
	page_size: number;
}

// 📜 Get All Properties
export const getAllProperties = async (): Promise<any[]> => {
	try {
		const res: AxiosResponse<ApiResponse<data>> = await apiClient.get(
			"properties/get"
		);

		return res.data.data?.properties || [];
	} catch (error: any) {
		console.error(
			"Error fetching properties:",
			error.response?.data?.message || error.message
		);
		return [];
	}
};

// 🔍 Get Property by ID
export const getPropertyByID = async (
	PropertyID: number
): Promise<any | null> => {
	try {
		const res: AxiosResponse<ApiResponse<any>> = await apiClient.get(
			`properties/get/${PropertyID}`
		);

		return res.data.data || null;
	} catch (error: any) {
		console.error(
			"Error fetching property by ID:",
			error.response?.data?.message || error.message
		);
		return null;
	}
};
