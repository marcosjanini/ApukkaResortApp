import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Marker } from "react-native-maps";

export default function App() {
const apukkaRegion = {
  latitude:  66.57829019540557,
  longitude: 26.014473699932882,
  latitudeDelta: 0.04,
  longitudeDelta: 0.04,
};
return (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={apukkaRegion}
    >
      {}
      <Marker coordinate={apukkaRegion} />
    </MapView>
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});