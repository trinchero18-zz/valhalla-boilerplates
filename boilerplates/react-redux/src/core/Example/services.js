export const get = () => (
    axios.get('/url here/')
        .then(function ({ data }) {
            return data;
        })
);
