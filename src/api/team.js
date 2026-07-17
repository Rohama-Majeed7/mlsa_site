import axios from "axios"

const API_BASE_URL = (import.meta.env.VITE_API_URL ?? "http://localhost:5000/api").replace(/\/$/, "")
const API_URL = `${API_BASE_URL}/team`

export const getTeamMembers = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    }
    catch (error) {
        console.error("Error fetching team members:", error)
        throw error
    }
}

