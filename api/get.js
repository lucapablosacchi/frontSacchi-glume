import axios from "axios"

export const getAllUser = async() => {
    return await axios.get('https://glumyback.herokuapp.com/api/usuarios')
}