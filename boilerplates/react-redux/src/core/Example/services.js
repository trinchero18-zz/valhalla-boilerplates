import axios from 'axios';

export const get = () => (
    axios.get('/url here/')
        .then(({ data }) => data)
);
