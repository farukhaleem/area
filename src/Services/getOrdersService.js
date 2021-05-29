const axios = require('axios').default;

export const getOrderDetails = async(user, auth_token) => {
    const res = fetch(`http://emeriosoftweb:1017/process/includes/data.php?order_user=${user}&auth_token=${auth_token}`)
    .then(response => response.json());
    
    return await res;
}



export const logIn = (username, password) => {
    const res = fetch(`http://emeriosoftweb:1017/process/includes/data.php?username=${username}&password=${password}`)
    .then(response => response.json());
    
    return res;
}

export const fetchCurrency = () => {
    const res = fetch(`http://emeriosoftweb:1017/process/includes/data.php?currency=all`)
    .then(response => response.json());
    
    return res;
}


export const submitFormData = (formData) => {
    axios.post('http://emeriosoftweb:1017/process/includes/data.php', formData)
    .then(function (response) {
        console.log(response.data);
        return response;
    })
    .catch(function (error) {
        console.log(error);
    });  
}


