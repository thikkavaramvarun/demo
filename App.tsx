import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState,useCallback} from 'react'
import User from './src/Components/User'
import CardList from './src/Components/CardList'
import Search from './src/Components/Search'



export type Data = {
  avatar_url : string
  followers :string | number
  following : string | number
  login:string
  public_repos : string | number
}
const App = () => {


  const [data,setData] = useState<Data>();


  const search = useCallback((searchItem : string)=>{
    console.log(searchItem,"searchItem");    
    if (searchItem == ""){
        alert("Please enter something");
        return
      }
    fetch(`https://api.github.com/users/${searchItem}`).then(res=>res.json()).then(data =>{
      console.log(data);
      setData(data)      
    })
  },[])
  return (
    // <View className="bg-black w-full h-full">
    //   <Text className='text-white text-bold text-xl border-4 border-green-600'>App</Text>
    // </View>
    <SafeAreaView className='bg-slate-100 h-full w-full'>
      <ScrollView keyboardShouldPersistTaps='handled' className='h-screen p-4 mx-auto'>
        <Search onSearch={search }/>
        {
          data && (<><User src={data.avatar_url} username={data.login}/>
            <CardList data={data} /></>)
        }
      </ScrollView>
    </SafeAreaView>
  )
}


export default App