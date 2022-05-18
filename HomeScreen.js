import react from "react";
import { View, Text, Image, StyleSheet, ImageBackground, Linking } from 'react-native';
import { Ionicons} from '@expo/vector-icons';


const App = () => {
    
    return(
        <>       
        <ImageBackground source={require("./assets/img1.jpg")} resizeMode="cover" style={styles.background}>
        <View style={styles.bigcontainer}>
        <Image style={{ width: 100, height: 100, marginBottom: 15 }} source={require("./assets/logo.jpg")}></Image>
            <Text style={styles.h1}>WELCOME TO APUKKA RESORT IN ROVANIEMI</Text>
        <Text style={styles.h2}>Stay under the Northern Lights and Experience Arctic Activities. And Nature fulfills the rest.</Text>
        </View>
        <View style={styles.smallcontainer}>
            <Text style={styles.h3}>CONTACT US</Text>
        </View>
        <View style={styles.smallcontainer}>
            <Ionicons name="call-outline" size={34} color="white"
            onPress={() => {Linking.openURL('tel:+358293700268') }}>
            </Ionicons>
            <Ionicons name="mail-outline" size={34} color="white"
            onPress={() => {Linking.openURL('mailto:info@apukkaresort.fi') }}>
            </Ionicons>
        </View>
        </ImageBackground>

        </>
    );
};

const styles = StyleSheet.create({

    bigcontainer: {
        flex:10, 
        alignItems: 'center', 
        justifyContent: 'space-around',
      },
    smallcontainer: {
        flex:1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        backgroundColor: "rgba(52, 52, 52, 0.5)"
      },

  h1: {
    fontSize: 26,    
    fontWeight: "bold",
    padding: 20,
    color: "white",
    backgroundColor: "rgba(52, 52, 52, 0.5)"

  },
  h2: {
    fontSize: 20,    
    fontWeight: "bold",
    padding: 20,
    color: "white",
    backgroundColor: "rgba(52, 52, 52, 0.5)"

  },
  h3: {
    fontSize: 20,    
    fontWeight: "bold",
    padding: 10,
    color: "white",
  },

  background: {
    flex: 1,
    width: null,
    height: null,
  }
});

export default App;
