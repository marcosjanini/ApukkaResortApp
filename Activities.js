import React from 'react';
import {View, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Linking} from 'react-native';

const Room = () => {

  const rooms=[
      {
          id: 1,
          name:'HUSKY SAFARIS',
          src: require("./assets/act1.jpg"),
          url: "https://fareharbor.com/embeds/book/apukkaresort/items/?flow=363575&full-items=yes&back=https://apukkaresort.fi/"

      },
      {
        id: 2,
        name:'REINDEER RIDE',
        src: require("./assets/act2.jpg"),
        url: "https://fareharbor.com/embeds/book/apukkaresort/items/?flow=474891&full-items=yes&back=https://apukkaresort.fi/"


    },
    {
        id: 3,
        name:'SNOWMOBILE SAFARI',
        src: require("./assets/act3.jpg"),
        url: "https://fareharbor.com/embeds/book/apukkaresort/items/?flow=363574&full-items=yes&back=https://apukkaresort.fi/"

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

return  <View style={styles.container}>
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

