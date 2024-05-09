import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'


type Props ={
    onSearch : Function
}
const Search = ({onSearch}: Props) => {


    const [userName,setUserName] = useState<string>('')
  return (
    <View className='flex flex-row item-center space-x-4 mx-auto mt-5'>
     <TextInput
     placeholder='Enter your username here'
      onChangeText={(txt: string) => setUserName(txt)}
      placeholderTextColor='black'
      className=' border-2 border--500 p-2 w-2/3 text-black rounded focus:border-2 focus:border-sky-200'/>
      <Pressable className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-4 py-2 rounded ' onPress={()=>onSearch(userName)}>
     <Text className='text-white'>Search</Text>
      </Pressable>
    </View>
  )
}


export default Search