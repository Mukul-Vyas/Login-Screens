import { StatusBar } from 'expo-status-bar';
import {Text, View , TouchableOpacity} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation=useNavigation();

  return (
    <View className="flex-1 justify-around  mx-4">

    <StatusBar style="auto" />
      

       
    <View className=" absolute bottom-0 mb-36">
    <Text className=" text-3xl font-extrabold text-black">Welcome to PopX</Text>
   <Text className=" text-lg font-bold text-bubble-gum"> Lorem ipsum dolor sit amet,</Text>
   <Text className=" text-lg font-bold text-bubble-gum"> consectetur adipisicing elit,</Text>
    </View>




  <TouchableOpacity style={{paddingLeft:116, paddingRight:116}} className=" absolute bottom-0 mb-20 rounded-md p-2 px-28 py-2 ml-1  bg-[#6c42f5]" onPress={()=>navigation.navigate("Register")}>
    
  <Text className=" text-base font-semibold text-white">Create Account </Text>

     </TouchableOpacity>

    

     <TouchableOpacity className=" absolute bottom-0 my-6 p-2 px-20 py-2 ml-1 rounded-md bg-[#cca9ff]" onPress={()=>navigation.navigate("Login")}>
              <Text className=" text-base font-semibold text-black">Already Registered? Login</Text>
     </TouchableOpacity>

</View>
  )
}

