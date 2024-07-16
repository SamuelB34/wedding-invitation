import axios from "axios"

const serverApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})
export const getGuestById = async (id: string) => {
	const response = await serverApi.get("/guests/single/" + id)
	return response.data
}
export const updateSawInvitation = async (id: string) => {
	const response = await serverApi.put("/guests/saw_invitation/" + id)
	return response.data
}

export const updateAssist = async (id: string, body: { assist: boolean }) => {
	const response = await serverApi.put("/guests/assist/" + id, body)
	return response.data
}
