import axios from 'axios';

export const getList = () => {
    return axios
        .get('api/see', {
            headers: {"Content-type": "application/json"}
        })
        .then(res => {
            let data = [];
            Object.keys(res.data).forEach((key) => {
                let val = res.data[key];
                // data.push([val.title, val.id])
                data.push([val[1], val[0]])
            });
            return data
        })
};

export const addToList = term => {
    return axios
        .post('api/see', {title: term}, {
            headers: {"Content-type": "application/json"}
        })
        .then((res) => {
            console.log(res)
        })
};

export const deleteItem = term => {
    axios
        .delete(`api/see/${term}`,{
            headers: {"Content-type": "application/json"}
        })
        .then((res) => {
            console.log(res)
        })
        .catch((res) => {
            console.log(res)
        })
};

export const updateItem = (term, id) => {
    return axios
        .put(`api/see/${id}`,{title: term},{
            headers: {"Content-type": "application/json"}
        })
        .then((res) => {
            console.log(res)
        })
};

