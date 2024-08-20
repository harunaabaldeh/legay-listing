import { jwtDecode } from "jwt-decode";
export default function getUserIdFromToken(token) {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.id; // Assuming `id` is the key for userId in the token
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}
