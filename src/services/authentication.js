import axios from "./axios";

export default async function login(username, password) {
  const payload = {
    username: username,
    password: password,
  };
  const results = await axios.post(baseUrl, payload);
  return results.data;
}
