import React from 'react'; 
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Login,
  Register,
  UploadPhoto,
  Doctor,
  Hospitals,
  Messages,
  ChooseDoctor,
  Chat,
  UserProfile,
  UpdateProfile,
  DoctorProfile
} from '../../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { DetailPage, HomePage, SplashScreen } from '../pages';


const Stack = createStackNavigator();



const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  );
};

export default Router;