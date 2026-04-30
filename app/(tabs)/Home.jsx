import { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import Category from '../../Components/Home/Category';
import Header from '../../Components/Home/Header';
import PopularBusiness from '../../Components/Home/PopularBusiness';
import Slider from '../../Components/Home/Slider';

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); 

   const onRefresh = async () => {
    setRefreshing(true);
    // Trigger re-fetch logic here (e.g. force PopularBusiness to reload)
    setRefreshKey(prev => prev + 1);
    
    setRefreshing(false);
  };


  return (
    <ScrollView
     refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {/* Header */}
<Header></Header>
      {/* Slider */}
<Slider key={'slider-${refreshKey}'}/>
      {/* Category */}
<Category key={'cat-${refereshKey}'}/>
      {/* Popular Business List */}
      <PopularBusiness key={'biz-${refreshKey}'}/>
      <View
      style={{height:50}}
      ></View>
    </ScrollView>
  )
}