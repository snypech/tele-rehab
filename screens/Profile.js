import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames';

const burned_data=[
    {
        name:'Susana Yepes',
        id:'123',
        gender:'Mujer',
        age:21,
        EPS:'Savia salud',
        workout_flag:false,
        current_condition:'',        
        medical_history:'' ,
        f_medical_history:'',
        surgical_history:'',
        Medicamentos:''
    },
    {
        name:'Sneyder Yepes',
        id:'456',
        gender:'Hombre',
        age:29,
        EPS:'SURA',
        workout_flag:true,
        current_condition:'',
        medical_history:'' ,
        f_medical_history:'',
        surgical_history:'',
        Medicamentos:''
    }
]
const table_labels=['Nombre','Identificación','Sexo', 'Edad','EPS','Realiza activad física','Enfermedad o condición actual','Antecedentes personales','Antecedentes familiares','Antecedentes quirúrgicos (operaciones)',
'Medicamentos']
const Profile = () => {
    const keys=Object.keys(burned_data[1]);
    return (
        <SafeAreaView style={tw`flex-1 justify-center`}>
            <View style={tw`p-4`}>
                {table_labels.map((value,index) => {
                    return(
                    <View style={tw`flex-row justify-between ${(index % 2  == 0) && 'bg-green-200'}`}>
                        <Text style={tw`font-bold`}>{value}: </Text>
                        <Text>{burned_data[1][keys[index]]}</Text>
                    </View>
                    )
                })}
                {/* <View style={tw`flex-row justify-between bg-green-100`}>
                    <Text style={tw`font-bold`}>Nombre: </Text>
                    <Text>{burned_data[1].name}</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-bold`}>Identificación: </Text>
                    <Text>{burned_data[1].id}</Text>
                </View>
                <View style={tw`flex-row justify-between bg-green-100`}>
                    <Text style={tw`font-bold`}>Sexo: </Text>
                    <Text>{burned_data[1].gender}</Text>
                </View>   
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-bold`}>Edad: </Text>
                    <Text>{burned_data[1].age}</Text>
                </View>    
                <View style={tw`flex-row justify-between bg-green-100`}>
                    <Text style={tw`font-bold`}>EPS: </Text>
                    <Text>{burned_data[1].EPS}</Text>
                </View>   
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-bold`}>Realiza actividad física: </Text>
                    <Text>{burned_data[1].workout_flag ? 'Si' : 'No'}</Text>
                </View> 
                <View style={tw`flex-row justify-between bg-green-100`}>
                    <Text style={tw`font-bold`}>Enfermedad o condición actual: </Text>
                    <Text>{burned_data[1].current_condition}</Text>
                </View>   
                <View style={tw`flex-row justify-between bg-green-100`}>
                    <Text style={tw`font-bold`}>Enfermedad o condición actual: </Text>
                    <Text>{burned_data[1].current_condition}</Text>
                </View>     */}
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})
