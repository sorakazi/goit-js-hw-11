export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43667057-3a723c15f5345c10cebb45902';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    page: 1,
    per_page: 40,
  },
};
