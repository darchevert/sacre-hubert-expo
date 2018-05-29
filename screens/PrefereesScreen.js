import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import Login from '../components/Login';

import {List, ListItem, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';

class PrefereesScreen extends React.Component {
  static navigationOptions = {
    title: 'Préférées',
    header: null
  };

  constructor() {
    super();
    this.state = {
      repliquesList: []
    }
  }
  // 
  // async playSound() {
  //   try {
  //     const {tintouin, status} = await Expo.Audio.Sound.create(require('../assets/sounds/tintouin.mp3'), {shouldPlay: true});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  //
  // componentDidMount() {
  //   fetch('http://10.4.1.45:3000/users/').then(function(response) {
  //     return response.json();
  //   }).then(function(repliquesList) {
  //     this.setState({repliquesList});
  //   });
  // }

  render() {
    var preferees = [];
    var titleAvatar = null;
    for (var i = 0; i < this.props.preferees.length; i++) {

      preferees.push(<ListItem
        onPress={() => this.playSound()}
        hideChevron="hideChevron"
        key={i}
        avatar='https://pbs.twimg.com/profile_images/1133992753/OSS117_400x400.png'
        title={this.props.preferees[i].name}
        subtitle={
          <View style = {styles.subtitleView} >
            <Text style={styles.ratingText}>{this.props.preferees[i].email}</Text>
          </View>}/>);

    }
    return (
      <View style={styles.container}>
      <ScrollView style={styles.container}>

        <List containerStyle={{marginBottom: 20}}>
          {preferees}
        </List>

      </ScrollView>

      {/* <Login isVisible={this.props.visible}/> */}

    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  subtitleView: {
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingText: {
    color: 'grey'
  }
});

function mapStateToProps(state) {
  return {
    preferees: state.preferees,
    visible: !state.user.login
  }
}

export default connect(mapStateToProps, null)(PrefereesScreen);
