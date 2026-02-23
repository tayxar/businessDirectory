import { useRouter } from 'expo-router';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function MenuList() {

  const router = useRouter();

  const onMenuClick=(item)=>{
    router.push(item.path)
  }
    const menuList= [
        {
         id:1,
         name:'Add Business',
         icon:require('./../../assets/images/add.png'),
         path:'/businessAdd/NewBusiness'
         },
         {
         id:2,
         name:'My Business',
         icon:require('./../../assets/images/business-and-trade.png'),
         path:''
         }
         ,
         {
         id:3,
         name:'Share',
         icon:require('./../../assets/images/Share.png'),
         path:''
         },
         {
         id:4,
         name:'Log Out',
         icon:require('./../../assets/images/business-and-trade.png'),
         path:''
         }

    ]
  return (
    <View>
      <FlatList
      data={menuList}
      numColumns={2}
      renderItem={({item,index}) =>(
        <TouchableOpacity
        onPress={()=>onMenuClick(item)}
        style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:10,
            flex:1,
            padding:10,
            borderRadius:15,
            borderWidth:1,
            margin:10,
            backgroundColor:'#fff',
            borderColor: Colors.PRIMARY
        }}
        >
            <Image source={item.icon}
             style={{width :50,height :50}}
             />
             <Text 
             style={{
              fontFamily:'outfit-medium',
              fontSize:15,
              flex:1
             }}
             >{item.name}</Text>
        </TouchableOpacity>
      )}
      >
        </FlatList>

        <Text
        style={{
          fontFamily:'outfit',
          textAlign:'center', marginTop:50,
          color: Colors.GRAY
        }}
        >Developed by Tay Xar || EchoByte @ 2026</Text>

    </View>
  )
}