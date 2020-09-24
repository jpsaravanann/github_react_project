import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from './src/components/Login'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/redux/reducers'

const Stack = createStackNavigator();
const store = createStore(rootReducer)


function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;