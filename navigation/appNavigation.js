import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Register from "../screens/Register";
import Account from "../screens/Account";
import Login from "../screens/login";

const Stack=createNativeStackNavigator();

export default function AppNavigation(){
    
    return(

        <NavigationContainer initialRouteName="Home">

          <Stack.Navigator>

            <Stack.Screen  name="Home" options={{headerShown:false}} component={Home} />
             <Stack.Screen name="Register" options={{headerShown:false}} component={Register} />
             <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
             <Stack.Screen name="Account" options={{headerShown:false}} component={Account} />
 
          </Stack.Navigator>
       

        </NavigationContainer>




    );
};