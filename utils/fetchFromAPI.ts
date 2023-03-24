import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "3d352b5d2cmsh567f0aa25e52d3ep1fcca2jsnc82c9cc5ac50",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
  } catch (e: any) {
    return alert(e.message);
  }
};
