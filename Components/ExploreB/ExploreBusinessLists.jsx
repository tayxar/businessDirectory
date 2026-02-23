import { FlatList, View } from 'react-native'
import ExploreBusinessListCard from './ExploreBusinessListCard'


export default function ExploreBusinessLists({categoryList}) {
  return (
    <View>
    <FlatList
    
    data={categoryList}
    
    renderItem={({item,index})=>(

      <View>
        
        <ExploreBusinessListCard categoryList={item}
        key={index}
        />
        </View>

    )}
    ItemSeparatorComponent={() => <View style={{ height: 10 }} />} 
    />
    </View>
  )
}