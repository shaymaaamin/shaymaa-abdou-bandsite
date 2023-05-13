const getURL = (path) => {
    const apiURL = 'https://project-1-api.herokuapp.com';
    const apiKey = '2ada016e-ddd1-4d38-8a3a-0fa1c2b5ce87';
    return apiURL + path + '?api_key=' + apiKey;
}

const getComments = () => {
    const url = getURL('/comments');
    return axios.get(url).then(response => response.data);
}

const getShowDates = () => {
    const url = getURL('/showdates');
    return axios.get(url).then(response => response.data);
}

const addComment = (name, comment) => {
    const url = getURL('/comments');
    const data = { name, comment };
    return axios.post(url, data).then(response => response.data);
}

const likeComment = (id) => {
    const url = getURL('/comments/' + id + '/like');
    return axios.put(url).then(response => response.data);
}

const deleteComment = (id) => {
    const url = getURL('/comments/' + id);
    return axios.delete(url).then(response => response.data);
}