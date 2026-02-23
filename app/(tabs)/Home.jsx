import { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import Category from '../../Components/Home/Category';
import Header from '../../Components/Home/Header';
import PopularBusiness from '../../Components/Home/PopularBusiness';
import Slider from '../../Components/Home/Slider';

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);

   const onRefresh = async () => {
    setRefreshing(true);
    // Trigger re-fetch logic here (e.g. force PopularBusiness to reload)
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
<Slider/>
      {/* Category */}
<Category/>
      {/* Popular Business List */}
      <PopularBusiness/>
      <View
      style={{height:50}}
      ></View>
    </ScrollView>
  )
}