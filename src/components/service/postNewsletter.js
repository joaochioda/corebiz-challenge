import axios from 'axios';

export default async function postNewsletter(name, email) {
    return axios({
        method: 'POST',
        url: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
        data: {
            name: name,
            email: email
          }
    }).then(res => {
        return res;
    }).catch(e => {
        return e;
    });
}