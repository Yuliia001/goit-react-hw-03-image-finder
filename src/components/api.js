import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const KEY = '38369214-2131a54870ec208cdae419196';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const PER_PAGE = 12;

export const dataQuery = async (query, page = 1) => {
  const responce = await axios.get(
    `?key=${KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&per_page=${PER_PAGE}&page=${page}`
  );
  return responce.data;
};
