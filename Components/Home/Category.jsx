import { useRouter } from 'expo-router';
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { db } from '../../configs/FirebaseConfig';
import CategoryItem from './CategoryItem';



export default function Category() {
    const[categoryList,setCategoryList] = useState([]);
    const router = useRouter();
    useEffect(()=>{
        GetCategoryList()

    },[])
    const GetCategoryList=async()=>{
        setCategoryList([]);
        const q = query(collection(db,'Category'));
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc)=>{
           // console.log(doc.data())
            setCategoryList(prev=>[...prev,doc.data()])
            
        })

    }
  return (
    <View>
        <View style={{
paddingTop:10,display:'flex',flexDirection:'row', justifyContent:'space-between'

        }}>
      <Text style={{
        paddingleft:20,
        marginTop:10,
        fontSize:20,
        fontFamily:'outfit-bold',
        


      }}>Category
      
      </Text>

</View>

<FlatList
horizontal={true}
style={{marginLeft:20, marginTop:5, padding:3}}
data={categoryList}
showsHorizontalScrollIndicator={false}
renderItem={({item,index})=>(
<CategoryItem
category={item} key={index}
onCategoryPress={(category)=>router.push('/businesslist/'+item.name)}
/>

 
   
)
}
/>

    </View>
  )
}