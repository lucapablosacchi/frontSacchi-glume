import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { getAllUser } from '../api/get.js'

const Home = ({navigation, route}) => {

    const [user , setUser] = useState(null)

    const getUsers = async() => {
        const {data} = await getAllUser()
        const a = data.filter((data) => data.nombre === route.params.name)

        setUser(a[0])
    }

    useEffect(() => {
        getUsers()
    }, [])
    
    
    return (
    
        <View style={styles.container}>
    
          
          <Text style={{textAlign: 'center', marginBottom: 20, fontSize: 20}}> Hola!👋 {user && user.nombre}</Text>

            <View style={{display: 'flex', alignItems: 'center'}}>
                <Image source={require('../assets/userPhoto.jpg')} style={{width: 100, height: 100, resizeMode: 'contain', borderRadius: 100}}/>
            </View>
            
      
         
          
          
            <Image source={require('../assets/graph.png')} style={{width: 400, height: 300, resizeMode: 'contain'}}/>

            <View style={{ display: 'flex', flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: 'rgba(255, 151, 151, 1)', marginHorizontal: 20, padding: 10, elevation: 10, borderRadius: 10}}>
                    <Text style={{marginStart: 20}}>Grupo Sanguineo: {user && user.sangre} </Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'white', marginHorizontal: 20, padding: 10, elevation: 10, borderRadius: 10}}>
                    <Text style={{marginStart: 20}}>Peso (Kg): {user && user.peso}</Text>
                </View>
            </View>
            

        </View>
    )
}

export default Home

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "white",
    },
  
  });