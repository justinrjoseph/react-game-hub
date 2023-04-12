import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1db03b73bea94c439d4045c973cbb264'
  }
});