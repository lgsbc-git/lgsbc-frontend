const API_BASE_URL = "https://lgsbc-backend-bfambggjd0cgh0g2.australiaeast-01.azurewebsites.net"

if (!API_BASE_URL) {
  console.error("❌ BACKEND_URL is missing. Check Azure env vars and rebuild.");
}

export default API_BASE_URL;
