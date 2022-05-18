import React from 'react';
import {View, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Linking} from 'react-native';

const Room = () => {

  const rooms=[
      {
          id: 1,
          name:'KAMMI SUITES',
          pricemin: 500,
          pricemax: 750,
          type:'Double suite',
          capacity: 4,
          description:'New Aurora Borealis suites with glass ceiling',
          src: require("./assets/img1.jpg"),
          url: "https://apukkaresort.fi/stay/kammi-suites/"

      },
      {
        id: 2,
        name:'AURORA CABIN GLASS IGLOOS',
        pricemin: 350,
        pricemax: 550,
        type:'Double room',
        capacity: 2,
        description:'Aurora accommodation with glass ceiling',
        src: require("./assets/img2.jpg"),
        url: "https://apukkaresort.fi/stay/aurora-cabin-glass-igloos/"



    },
    {
        id: 3,
        name:'KOMSIO SUITES',
        pricemin: 450,
        pricemax: 650,
        type:'Double suite',
        capacity: 4,
        description:'Panoramic sky views from the comfort of your own bed',
        src: require("./assets/img3.jpg"),
        url: "https://apukkaresort.fi/stay/komsio-suite/"

    },
    {
        id: 4,
        name:'VILLA APUKKA',
        pricemin: 600,
        pricemax: 1200,
        type:'Family',
        capacity: 12,
        description:'Spacious Private Villa',
        src: require("./assets/img4.jpg"),
        url: "https://apukkaresort.fi/stay/villa-apukka/"

    }
  ];
  

const list = () => {
  return rooms.map((element) => {
    return (
      <View style={styles.container} key={element.id}>
      <ImageBackground source={element.src} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{element.name}</Text>
        <Button 
        color="black"
        title="BOOK"
        onPress={()=>{ Linking.openURL(element.url)}}
      />
      </ImageBackground>
      
    </View>
    
    
    );
  });
};

return       <View style={styles.container}>
<SafeAreaView style={styles.container}>{list()}
</SafeAreaView></View>

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  smallcontainer: {
    flex:0.05, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)"
  }
});

export default Room;