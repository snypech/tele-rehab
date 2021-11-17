import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data=[
    {
        id:"123",
        title:"Rutina de ejercicios",
        screen:"WorkoutRoutine",
        icon:"barbell-outline"
    },
    {
        id:"456",
        title:"Tele Consulta",
        screen:"TeleConsult",
        icon:"headset-outline"
    },
    {
        id:"789",
        title:"Mi perfil",
        screen:"Profile",
        icon:"person-outline"
    }
]

const NavOptions = () => {
    const navigation =useNavigation();
    return (
        <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity
            onPress={()=>navigation.navigate(item.screen)}
            style={tw`px-6`}
            >
                <View style={tw`flex-row p-4 m-2 bg-gray-400`}>
                    <Icon
                    name={item.icon}
                    type="ionicon"
                    color="white"
                    size={40}
                    style={tw`m-auto`}
                    />
                    <Text style={tw`text-lg text-white font-semibold m-auto`}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})