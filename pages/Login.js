import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { postUser } from '../api/loginApi'

const Login = ({navigation}) => {

    const [nombre, setNombre] = useState('')
    const [contrasenia, setContrasenia] = useState('')
    const [mail, setMail] = useState('')
    const [peso, setPeso] = useState(0)
    const [sangre, setSangre] = useState('')

    const [error, setError] = useState(false)

    const handleLogin = async() => {

        if (nombre.trim().length > 0 && contrasenia.trim().length > 0 && mail.trim().length > 0 && peso > 0 && sangre.trim().length > 0) {
            setError(false)
            const resp = await postUser(nombre, contrasenia, mail, peso, sangre)
            
            if(resp.data) {
                setNombre('')
                setContrasenia('')
                setMail('')
                setPeso('')
                setSangre('')
                navigation.navigate('Home', {
                    name: nombre
                })
            } else {
                setError('El usuario no se pudo subir')
            }
        } else {
            setError('Rellene todos los datos')
        }
    }


    return (
        <View style={{padding: 10}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>Login</Text>

            {
                error && <Text style={{marginVertical: 10, color: 'red'}}>{error}</Text>
            }

            <Text>Nombre</Text>
            <TextInput style={{backgroundColor: 'white', borderRadius: 10, color: 'black', paddingLeft: 10, fontWeight: '600', elevation: 2}} onChangeText={(value) => setNombre(value)} value={nombre}/>

            <Text>Clave</Text>
            <TextInput style={{backgroundColor: 'white', borderRadius: 10, color: 'black', paddingLeft: 10, fontWeight: '600', elevation: 2}} onChangeText={(value) => setContrasenia(value)} value={contrasenia}/>

            <Text>Mail</Text>
            <TextInput style={{backgroundColor: 'white', borderRadius: 10, color: 'black', paddingLeft: 10, fontWeight: '600', elevation: 2}} onChangeText={(value) => setMail(value)} value={mail}/>

            <Text>Peso</Text>
            <TextInput style={{backgroundColor: 'white', borderRadius: 10, color: 'black', paddingLeft: 10, fontWeight: '600', elevation: 2}} onChangeText={(value) => setPeso(Number(value))} keyboardType="number-pad" value={peso}/>

            <Text>Sangre</Text>
            <TextInput style={{backgroundColor: 'white', borderRadius: 10, color: 'black', paddingLeft: 10, fontWeight: '600', elevation: 2}} onChangeText={(value) => setSangre(value)} value={sangre}/>

            <TouchableOpacity onPress={handleLogin} style={{backgroundColor: 'skyblue', padding: 10, width: '40%', marginHorizontal: 100, marginTop: 20, borderRadius: 60}}><Text style={{textAlign: 'center'}}>Ingresar</Text></TouchableOpacity>

            
        </View>
    )
}

export default Login