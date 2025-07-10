/**

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';
import PlayGround from './src/screens/PlayGround';
import {ThemeProvider} from './src/contexts/ThemeContext';
import axios from 'axios';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [data, setData] = useState(null);
  const [products, setProducts] = useState([])
  const [apiState, setApiState] = useState({
    isLoading: false,
    isError: false,
    message: null,
  });

  const fetchProducts = async () => {
    try {
      setApiState(prev => ({
        ...prev,
        isLoading: true,
        message: 'Loading products data',
      }));
      // const data = await fetch("https://dummyjson.com/products")
      // console.log("data =>", JSON.parse(data))
      const data = await axios.get('https://dummyjson.com/products');
      console.log('data55 =>', data);
      setData(data?.data?.products);
      setProducts(data?.data?.products?.slice(0,10))
    } catch (error) {
      console.log('Error', JSON.stringify(error));
      setApiState(prev => ({
        isLoading: false,
        message: 'Failed to fetch products',
        isError: true,
      }));
    } finally {
      setApiState({
        isLoading: false,
        isError: false,
        message: null,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEndReached = async () => {
    setProducts(data?.slice(products?.length, products?.length+10 ))
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
      }}>
      <FlatList
      onEndReached={handleEndReached}
        data={products}
        style={{
          flex: 1,
        }}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        renderItem={({item}) => <Card item={item} />}
      />
    </SafeAreaView>
  );
}

export default App;

const Card = ({item}) => {
  return (
    <View style={styles?.cardContainer}>
      <Text style={styles?.title}>{item?.title}</Text>
      <Text style={styles?.desc}>{item?.description}</Text>

      <View style={styles?.prodInfoContainer}>
        <Text style={styles?.price}>{item?.price}</Text>
        <Text style={styles?.category}>{item?.category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#f7f7f7',
    overflow: 'hidden',
    flex:1,
    padding:16
  },
  title: {
    color:"#222",
    fontSize: 20,
    fontWeight:"600"
  },
  desc: {
    color:"#222",
    fontSize: 16,
    fontWeight:"600",
    marginTop:6

  },
  prodInfoContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:10
  },
  price: {
    color:"#222"
  },
  category: {
    color:"#222"
  },
  
});

*/


import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';
import PlayGround from './src/screens/PlayGround';
import {ThemeProvider} from './src/contexts/ThemeContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // backgroundColor={"#fff"}
        />
        {/* <RootNavigator /> */}
        <PlayGround />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
