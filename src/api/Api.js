//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://dash.skywarrior.tech/api' 
})

export default Api