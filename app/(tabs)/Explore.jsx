import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import CategorySlider from '../../Components/BusinessDetails/CategorySlider';
import ExploreBusinessLists from '../../Components/ExploreB/ExploreBusinessLists';
import { db } from '../../configs/FirebaseConfig';

export default function Explore() {

  const[categoryList,setCategoryList] = useState([]);


useEffect( ()=>{
        GetCategoryList();

    }
       ,[])

const GetCategoryList=async(name)=>{

       if (!name) {
    console.log("No item selected yet in Explore");
    return;
  }
           
           setCategoryList([]);
           
          try{
            const q=query(collection(db,'SubCategory'),where("alphabet",'==',name));
              
            //const q = query(collection(db,'BusinessList'),limit(10));
              
            const querySnapShot = await getDocs(q);
           
                    querySnapShot.forEach((doc) =>{
                       console.log(doc.data());
                     
                       setCategoryList(prev=>[...prev,{id:doc?.id,... doc.data()}])
                       
                   }
               
               )
            }
            catch(error){
                console.log(error);
            }

               
           
    
        }




  return (
    <View style={{

      padding:20
    }}
    
    >
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}
      >အက္ခရာ နှင့် ရှာဖွေမည် </Text>

      {/* Search Bar */}
<View style={{

        display : 'flex',
        flexDirection : 'row',
        gap : 10,
        alignItems : 'center',
        backgroundColor : '#fff',
        padding : 10,
        marginVertical : 10,
        marginTop: 15,
        borderRadius: 8,
        borderWidth:1
      }}>
        {/* Search Bar */}
{/* 
        <Ionicons name="search" size={24} color="black" 
        onPress={()=>{console.log("hello")}}
        />
        <TextInput placeholder='Search..'
         
        Style={{
            fontFamily: 'outfit',
            fontSize:16
        }}
        
        />
        */}
      </View>

      

      {/* Category */}

      <CategorySlider onSelect={(name) => {
  GetCategoryList(name)
}} />


<ExploreBusinessLists
categoryList ={categoryList}
>
  </ExploreBusinessLists>




       {/*  onCategorySelect={(category)=>console.log(category)}  */}

    </View>
  )
}