import axios from "./axios";


export async function loginUser(username, password) {
  console.log("hi")
  const results = await axios.post(
    "/v2/login",
    JSON.stringify({
      username: "9debcc5698d69aa2c3f29da952047eed6494c7f4",
      password: "nUloriWXJc90OjE4XJx3kMokZAfhiQU",
    })
  );
  return results;
}


export async function sendMessage(phoneNumber, message, type="text", jwtToken) {
  const payload = {
    "msisdns": phoneNumber,
    "message": {
      "type": type,
      "text": message
    }
  }

  const config = {
    headers: {
      'Authorization': `Bearer ${jwtToken}`,
      'Content-Type': 'application/json'
    }
  };

  const result = await axios.post("v1/business/messages", JSON.stringify(payload), config);
  return result;
}


export async function getMessage() {
 
  const result = await axios.get("/v1/business/messages");
  return result;
  
}


