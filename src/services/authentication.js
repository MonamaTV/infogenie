import axios from "./axios";

export default async function loginUser(username, password) {
  const results = await axios.post(
    "/v2/login",
    JSON.stringify({
      username: "9debcc5698d69aa2c3f29da952047eed6494c7f4",
      password: "nUloriWXJc90OjE4XJx3kMokZAfhiQU",
    })
  );
  return results;
}
