import { View, Text , TextInput, TouchableOpacity} from 'react-native'
import React , {useState} from 'react'
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Register(){
    const [value, setValue] = useState('first');
    const navigation=useNavigation();

  return (

    <View className="bg-white  h-full" >
      
      <View className="mt-16 ml-5">
   <Text className=" text-3xl font-extrabold text-black">Create your</Text>
   <Text className=" text-3xl font-extrabold text-black">PopX account</Text>
   </View>

   <View>
         
         <View style={{marginTop:7}} className="bg-white p-2  absolute flex ml-7 z-10 items-center">
         <Text className="text-midnight font-bold ">Full Name <Text style={{color: 'red'}}>*</Text></Text>
         </View>
   
         <View >
         <TextInput  className="z-0 mt-6 border p-2 border-slate-200 mx-4 rounded-md" placeholder='Enter full name' />
         </View>
   
   
         </View>

      <View>
         
      <View style={{marginTop:7}} className="bg-white p-2  absolute flex ml-7 z-10 items-center">
      <Text className="text-midnight font-bold ">Phone number <Text style={{color: 'red'}}>*</Text></Text>
      </View>

      <View >
      <TextInput  className="z-0 mt-6 border p-2 border-slate-200 mx-4 rounded-md" placeholder='Enter phone number' />
      </View>


      </View>


      <View>
         
         <View style={{marginTop:7}} className="bg-white p-2  absolute flex ml-7 z-10 items-center">
         <Text className="text-midnight font-bold ">Email address <Text style={{color: 'red'}}>*</Text></Text>
         </View>
   
         <View >
         <TextInput  className="z-0 mt-6 border p-2 border-slate-200 mx-4 rounded-md" placeholder='Enter email address'/>
         </View>
   
   
         </View>

         <View>
         
         <View style={{marginTop:7}} className="bg-white p-2  absolute flex ml-7 z-10 items-center">
         <Text className="text-midnight font-bold ">Password <Text style={{color: 'red'}}>*</Text></Text>
         </View>
   
         <View >
         <TextInput  className="z-0 mt-6 border p-2 border-slate-200 mx-4 rounded-md" placeholder='Enter password' />
         </View>
   
   
         </View>

         <View>
         
         <View style={{marginTop:7}} className="bg-white p-2  absolute flex ml-7 z-10 items-center">
         <Text className="text-midnight font-bold ">Company name</Text>
         </View>
   
         <View >
         <TextInput  className="z-0 mt-6 border p-2 border-slate-200 mx-4 rounded-md" placeholder='Enter company name' />
         </View>
   
   
         </View>

         <View className="m-2 ml-4">
         <Text className="font-semibold text-base">Are you an Agency? <Text style={{color: 'red'}}>*</Text></Text>
         </View>

         <View>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View className="ml-2" style={{ flexDirection: 'row', alignItems: 'center' , margin:1}}>
          <RadioButton value="first" />
          <Text>Yes</Text>
          <RadioButton value="second"  />
          <Text>No</Text>
        </View>
      </RadioButton.Group>
    </View>


    <TouchableOpacity className=" absolute bottom-0 mb-8 mx-7 rounded-md p-2 px-28  bg-[#6c42f5]" onPress={()=>navigation.navigate("Account")}>
    
  <Text className=" text-base font-semibold text-white">Create Account </Text>

     </TouchableOpacity>

    </View>
    
   
  )
}
