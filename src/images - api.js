import axios from "axios";

axios.defaults.baseURL =
	"https://api.unsplash.com/photos/?client_id=0WUy2s5GnAQWx8pKj5rxUKqETipw_oyzlD_zoWPC9u8";

export const fetchImagesWithInput = async (input) => {
	const response = await axios.get(`/search?query=${input}`);
	return response.data.hits;
};
