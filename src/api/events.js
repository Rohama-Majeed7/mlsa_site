import axios from "axios"

const API_BASE_URL = (import.meta.env.VITE_API_URL ?? "http://localhost:5000/api").replace(/\/$/, "")
const API_URL = `${API_BASE_URL}/events`

export const getEvents = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    }
    catch (error) {
        console.error("Error fetching events:", error)
        throw error
    }
}

export const getEventById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`)
        return response.data
    }
    catch (error) {
        console.error(`Error fetching event with ID ${id}:`, error)
        throw error
    }
}