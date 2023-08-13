import { View, Text } from 'react-native'
import React from 'react'
import {UserCircleIcon} from "react-native-heroicons/outline"
import {CameraIcon} from "react-native-heroicons/solid"


export default function Account(){


return(

    <View>
    <View className="bg-white  h-24">

        <Text className="mt-12 text-lg ml-4 font-bold">Account Settings</Text>
         
        <View >
            <View className="absolute mt-10 ml-4">
        <UserCircleIcon size="70" color="black" />
        </View>
        <View className="absolute mt-20 ml-16 bg-[#6c42f5] rounded-full w-6 h-6 flex items-center justify-center ">
        <CameraIcon size="15" color="white" />
        </View>
        <Text className="mt-12 ml-24 font-bold">Marry Doe</Text>
        <Text className=" ml-24 font-medium">Marry@gmail.com</Text>
      </View>

        <View className="h-28">
        <Text className="mt-10 ml-4 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum unde necessitatibus iste quisquam modi veritatis rem, 
        sapiente delectus error dolorem tempore, minus est</Text>
      </View>

      <View className="border-dashed border-b border-slate-200">
         
      </View>


    </View>
    </View>

)
}