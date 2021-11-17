import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import TeleConsult from './screens/TeleConsult';
import WorkoutRoutine from './screens/WorkoutRoutine';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown:false,
          }}
          />
          <Stack.Screen
          name="TeleConsult"
          component={TeleConsult}
          options={{
            headerShown:false,
          }}
          />
          <Stack.Screen
          name="WorkoutRoutine"
          component={WorkoutRoutine}
          options={{
            headerShown:false,
          }}
          />
          <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown:false,
          }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
