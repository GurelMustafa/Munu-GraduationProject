import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Open from './screens/Open';
import Munu from './screens/Munu';
import Manager from './screens/Manager';
import SignUp from './screens/SignUp';
import AdminSignUp from './screens/AdminSignUp';
import AdminProcess from './screens/AdminProcess';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Open">
        <Stack.Screen name="Open" component={Open} />
        <Stack.Screen name="Munu" component={Munu} />
        <Stack.Screen name="Manager" component={Manager} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AdminSignUp" component={AdminSignUp} />
        <Stack.Screen name="AdminProcess" component={AdminProcess}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
