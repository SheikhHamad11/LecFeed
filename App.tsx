import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import AboutPage from './src/screens/About';
import {ToastProvider} from 'react-native-toast-notifications';
import Loading from './src/components/Loading';

export default function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      // setloading(false);
    }, 1500);
  }, []);

  const Stack = createStackNavigator();
  // if (loading) {
  //   <Loading />;
  // }
  return (
    <ToastProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="About"
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerStyle: {borderBottomColor: '#0274B3', borderBottomWidth: 1},
            }}
            component={AboutPage}
          />
          <Stack.Screen
            name="Contact"
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerStyle: {borderBottomColor: '#0274B3', borderBottomWidth: 1},
            }}
            component={Contact}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
}
