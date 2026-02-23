import { FlatList, Image, TouchableOpacity, View } from 'react-native';

export default function CategorySlider({onSelect}) {
  
{/* 
const[categoryList,setCategoryList] = useState([]);


useEffect( ()=>{
        GetCategoryList();

    }
       ,[])

      const GetCategoryList=async(item)=>{

        if (!item || !item.name) {
    console.log("No item selected yet.");
    return;
  }
           
           setCategoryList([]);
           
          try{
            const q=query(collection(db,'SubCategory'),where("alphabet",'==',item.name));
              
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

               
           
    
        }*/}
    
 const CategoryList=[
    {
        id:1,
        name:'က',
        icon:require('./../../assets/images/MM_1.png'),
        

    },
    {
        id:2,
        name:'ခ',
        icon:require('./../../assets/images/MM_2.png'),

    },
    {
         id:3,
        name:'ဂ',
        icon:require('./../../assets/images/MM_3.png'),
    },
    {
         id:4,
        name:'ဃ',
        icon:require('./../../assets/images/MM_4.png'),
    },
    {
         id:5,
        name:'င',
        icon:require('./../../assets/images/MM_5.png'),
    },
    {
         id:6,
        name:'စ',
        icon:require('./../../assets/images/MM_6.png'),
    },
    {
         id:7,
        name:'ဆ',
        icon:require('./../../assets/images/MM_7.png'),
    },
    {
         id:8,
        name:'ဇ',
        icon:require('./../../assets/images/MM_8.png'),
    },
    {
         id:9,
        name:'ဈ',
        icon:require('./../../assets/images/MM_9.png'),
    },
    {
         id:10,
        name:'ည',
        icon:require('./../../assets/images/MM_10.png'),
    },
    {
         id:11,
        name:'တ',
        icon:require('./../../assets/images/MM_11.png'),
    },
    {
         id:12,
        name:'ထ',
        icon:require('./../../assets/images/MM_12.png'),
    },
    {
         id:13,
        name:'ဒ',
        icon:require('./../../assets/images/MM_13.png'),
    },
    {
         id:14,
        name:'ဓ',
        icon:require('./../../assets/images/MM_14.png'),
    }    
    ,
    {
         id:15,
        name:'န',
        icon:require('./../../assets/images/MM_15.png'),
    }    
    ,
    {
         id:16,
        name:'ပ',
        icon:require('./../../assets/images/MM_16.png'),
    },
    {
         id:17,
        name:'ဖ',
        icon:require('./../../assets/images/MM_17.png'),
    },
    {
         id:18,
        name:'ဗ',
        icon:require('./../../assets/images/MM_18.png'),
    },
    {
         id:19,
        name:'ဘ',
        icon:require('./../../assets/images/MM_19.png'),
    },
    {
         id:20,
        name:'မ',
        icon:require('./../../assets/images/MM_20.png'),
    },
    {
         id:21,
        name:'ယ',
        icon:require('./../../assets/images/MM_21.png'),
    },
    {
         id:22,
        name:'ရ',
        icon:require('./../../assets/images/MM_22.png'),
    }
    ,
    {
         id:23,
        name:'လ',
        icon:require('./../../assets/images/MM_23.png'),
    },
    {
         id:24,
        name:'ဝ',
        icon:require('./../../assets/images/MM_24.png'),
    },
    {
         id:25,
        name:'သ',
        icon:require('./../../assets/images/MM_25.png'),
    },
    {
         id:26,
        name:'[ဟ]',
        icon:require('./../../assets/images/MM_26.png'),
    },
    {
         id:27,
        name:'အ',
        icon:require('./../../assets/images/MM_27.png'),
    }


    ]

    const OnPressHandle=(item)=>{

        //if(!item.name){
           //console.log(item.name +"hello");
         //  GetCategoryList(item);
           onSelect(item.name);

        //}
    }
  
    return (


    <View>
      

      <FlatList
            data = {CategoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            
            
            style={{paddingLeft:20}}
            renderItem={ ({item,index})=>(

                 <TouchableOpacity key={index}
                        onPress={()=>OnPressHandle(item)}
                        >
             <Image source={item?.icon}
                         style={{
                             width:50,
                             height:50,
                             margin:2
                         }}
                         
                         />
                         </TouchableOpacity>
              
      
      
            )} 
            />
    </View>
  )
}