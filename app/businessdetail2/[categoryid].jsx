import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { collection, getDocs, query, where } from 'firebase/firestore';
import BusinessListCard from '../../Components/BusinessList/BusinessListCard';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';


export default function BusinessDetail2() {
      const[loading,setLoading] = useState(true);
const navigation = useNavigation();
    const {categoryid} = useLocalSearchParams();
    
        const [businessList,setBusinessList] = useState();



      useEffect(()=>{
            navigation.setOptions({
                headerShown:true,
                headerTitle:categoryid
            });
           getBusinessList()
            
        },[categoryid]);    

    const getBusinessList=async()=>{
 
      console.log(categoryid+" Hello");
     
        if (!categoryid) {
    console.log("No item selected yet in Explore");
    return;}
    
    setBusinessList([]);
    
   setLoading(true)
     const q=query(collection(db,'BusinessList'),where("SubCategory",'==',categoryid));
       
     //const q = query(collection(db,'BusinessList'),limit(10));
       
     const querySnapShot = await getDocs(q);
    
             querySnapShot.forEach((doc) =>{
               console.log(doc.data());
               console.log("data extract finish from categoryID");
                setBusinessList(prev=>[...prev,{id:doc?.id,... doc.data()}])
                
            }
        
        )
        setLoading(false);
    
    }
  return (
    <View>
       
   {businessList?.length>0&&loading==false?
      <FlatList
         data={businessList}
         onRefresh={getBusinessList}
         refreshing={loading}
         renderItem={({item,index})=>(
   
           <BusinessListCard
   
   Business = {item}
   key={index}
   />
   
         )}
         >
           </FlatList>
           :
           loading?<ActivityIndicator
           
           style={{
             marginTop:'60%'
           }}
   
           size={'large'}
           color={Colors.PRIMARY}
           />:
           <Text
           
           style={{
               fontFamily:'outfit-bold',
               fontSize:20,
               textAlign:'center',
               marginTop:'20%',
               color:Colors.GRAY
           }}
           
           >No Business Found</Text>}
   
       </View>
  )
}