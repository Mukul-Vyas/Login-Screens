import { View, Text , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Login(){

    const navigation=useNavigation();
   

  return (

    <View className="bg-white  h-full" >
      
      <View className="mt-16 ml-5">
   <Text className=" text-3xl font-extrabold text-black">Signin to your</Text>
   <Text className=" text-3xl font-extrabold text-black ">PopX account</Text>
   <Text className=" text-lg font-bold text-bubble-gum mt-2">Lorem ipsum dolor sit amet,</Text>
   <Text className=" text-lg font-bold text-bubble-gum " >consectetur adipisicing elit,</Text>
   </View>

      <View>
         
         <View style={{marginTop:7}} className="bg-white p-2  absolute flex ml-7 z-10 items-center">
         <Text className="text-midnight font-bold ">Email address</Text>
         </View>
   
         <View >
         <TextInput  className="z-0 mt-6 border p-2 border-slate-300 mx-4 rounded-md" placeholder='Enter email address' />
         </View>
   
   
         </View>

         <View>
         
         <View style={{marginTop:7}} className="bg-white p-2  absolute flex ml-7 z-10 items-center">
         <Text className="text-midnight font-bold ">Password</Text>
         </View>
   
         <View >
         <TextInput  className="z-0 mt-6 border p-2 border-slate-300 mx-4 rounded-md " placeholder='Enter password' />
         </View>
   
   
         </View>

         


    <TouchableOpacity style={{marginTop:354 , paddingleft:170,paddingRight:170}} className=" flex items-center justify-center absolute mt-80 mx-4 rounded-md p-3 px-36  bg-[#cacaca]" 
   onPress={()=>navigation.navigate("Account")} >
    
  <Text className="flex items-center justify-center text-base font-bold text-white">Login </Text>

     </TouchableOpacity>

    </View>
    
   
  )
}
