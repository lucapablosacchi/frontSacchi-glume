import axios from "axios"


export const postUser = async(nombre, contrasenia, mail, peso, sangre) => {
    return await axios.post('https://glumyback.herokuapp.com/api/usuarios/', {
        nombre,
        contrasenia,
        mail,
        peso,
        sangre,
    })
}