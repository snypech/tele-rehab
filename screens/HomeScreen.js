import { useNavigation } from '@react-navigation/core';
import React from 'react'
import {StyleSheet, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`p-10 font-bold text-xl`}>TELE - REHAB</Text>
            <NavOptions/>          
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
