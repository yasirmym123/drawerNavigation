import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Header,Left,Right,Icon} from 'native-base';
class SettingsScreen extends React.Component {

    static navigationOptions = {
        drawerIcon: ({tinyColor}) => (
            <Icon name="home"style={{ fontSize: 24, color:tinyColor}} />
        )
    }
  render() {
    return (
      <View style={styles.container}>
      <Header>
          <Left>
              <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
      </Header>
      <View style={{ flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text>Settings Screen</Text>
      </View>
      
      </View>
    );
  }
}

export default SettingsScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
