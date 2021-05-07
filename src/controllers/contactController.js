import axios from 'axios'

/*
    data = {
        name:
        email:
        message:
    }
*/
export default function sendContactForm(data, onSuccessFn) {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios({
        method: 'post',
        url: 'https://9wxw5kz2rg.execute-api.us-east-1.amazonaws.com/Production/contact?email=g@gmail.com&name=Jonna',
        data: data,
    }).then( (res) => {
        onSuccessFn();
        console.log('message sent');
        //console.log(res);
    }).catch((error) =>
        console.log(error)
    )
}