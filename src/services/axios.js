import axios from 'axios';





const baseUrl = 'https://api.ayoba.me/v2/login'

export default async function login(username=import.meta.env.VITE_USERNAME, password=import.meta.env.VITE_PASSWORD) {
    const payload = {
        "username": username,
        "password": password,
      }
    const results = await axios.post(baseUrl, payload)
    return results.data;
}


