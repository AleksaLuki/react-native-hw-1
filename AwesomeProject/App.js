import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts } from 'expo-font';
// import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import Main from './components/Main';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }; 

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>            
            <Main />
            <StatusBar style="auto" />
          </View>
        </TouchableWithoutFeedback>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
});


// import "react-native-gesture-handler";
// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import LoginScreen from "./src/screens/authScreens/LoginScreen";
// import RegistrationScreen from "./src/screens/authScreens/RegistrationScreen";
// import Home from "./src/screens/mainScreens/Home";

// import { useFonts } from "expo-font";

// const AuthStack = createStackNavigator();

// const App = () => {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       <AuthStack.Navigator initialRouteName="Login">
//         <AuthStack.Screen
//           name="Registration"
//           component={RegistrationScreen}
//           options={{ headerShown: false }}
//         />
//         <AuthStack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <AuthStack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}
//         />
//       </AuthStack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;