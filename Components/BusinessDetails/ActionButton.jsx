import { FlatList, Image, Linking, Share, Text, TouchableOpacity, View } from 'react-native';

export default function ActionButton({business}) {
    const actionButtonMenu=[
    {
        id:1,
        name:'Call',
        icon:require('./../../assets/images/call.png'),
        url: 'tel:'+ business?.contact,
        phone : business?.contact

    },
    {
        id:2,
        name:'Call2',
        icon:require('./../../assets/images/call.png'),
        url: 'tel:'+ business?.contact2,
        phone : business?.contact2

    },
    {
        id:3,
        name:'Call3',
        icon:require('./../../assets/images/call.png'),
        url: 'tel:'+ business?.contact3,
        phone : business?.contact3
        
    },
    {
        id:4,
        name:'share',
        icon:require('./../../assets/images/Share.png'),
        url: '',
        
    }


    ]

   const OnPressHandle=(item) =>{
    if(item.name=='share'){
      Share.share({

        message: business?.name+"\n Address" + business.address + "\n Find More on Mandalay Business Guide App"

      })
      return ;
    }
    Linking.openURL(item.url);
   }

  return (
    <View
    style={{
        backgroundColor:"#fff",
        padding:20
    }}
    >

      <FlatList
      data={actionButtonMenu}
      numColumns={4}
      columnWrapperStyle={{justifyContent:'space-between'}}
      renderItem={({item,index})=>(
        <TouchableOpacity key={index}
        onPress={()=>OnPressHandle(item)}
        >
            <Image source={item?.icon}
            style={{
                width:50,
                height:50
            }}
            
            />
            <Text
            style={{
                fontFamily:'outfit-medium',
                textAlign:'center',
                marginTop:3
            }}
            >{item.name}</Text>
           
        </TouchableOpacity>
      )

      }
      ></FlatList>
    </View>
  )
}