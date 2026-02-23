import { Text, View } from 'react-native'

export default function About({business}) {
  return (
    <View
    style={{

        padding:20,
        backgroundColor:'#fff'
    }}
    >
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}
      >About</Text>
      <Text>{business.contact}</Text>
      <Text>{business.contact2}</Text>
      <Text>{business.contact3}</Text>
      <Text>{business.about}</Text>
    </View>
  )
}