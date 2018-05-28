import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { List, ListItem, Avatar } from 'react-native-elements';
import {connect} from 'react-redux';


class RepliquesScreen extends React.Component {
  static navigationOptions = {
    title: 'Répliques',
    header: null
  };

  constructor() {
      super();
      this.state = {repliquesList:[]}
  }

  async playSound() {
      try {
        const {tintouin, status} = await Expo.Audio.Sound.create(require('../assets/sounds/tintouin.mp3'), {shouldPlay: true});
      } catch (error) {
        console.log(error);
      }
    }

  componentDidMount(){
    fetch('http://10.4.1.45:3000/users/')
    .then(function(response) {
        return response.json();
    })
    .then(function(repliquesList) {
        this.setState({
          repliquesList
        });
    });
   }

  render() {

    var repliquesList = [];

    /*var repliquesList = this.state.repliquesList.map((user, i)=> {
      nameSplit = this.state.repliquesList[i].name.split(" ");
      firstName = nameSplit[0];
      lastName = nameSplit[1];

      return (<ListItem
        onPress={ ()=>this.props.onHandleClick(this.state.repliquesList[i].name, this.state.repliquesList[i].email, this.state.repliquesList[i].company.name) }
        hideChevron
        key={i}
        avatar={<Avatar
          small
          overlayContainerStyle={{backgroundColor: '#2ecc71'}}
          rounded
          title={firstName[0].toUpperCase()+lastName[0].toUpperCase()}
                />}
        title={this.state.repliquesList[i].name}
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{this.state.repliquesList[i].email}</Text>
            <Text style={styles.ratingText}>company: {this.state.repliquesList[i].company.name}</Text>
          </View>
        }
              />);
    })*/

    for(var i=0; i<this.state.repliquesList.lenght; i++) {

        repliquesList.push(<ListItem
          onPress={() => this.playSound()}
          hideChevron
          key={i}
          avatar='https://pbs.twimg.com/profile_images/1133992753/OSS117_400x400.png'
          title={this.state.repliquesList[i].punchline}
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>{this.state.repliquesList[i].name}</Text>
            </View>
          }

                      />);
    }

    return (
      <ScrollView style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>


          {repliquesList}


        </List>

        {/* <Login isVisible={true}/> */}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  subtitleView: {
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingText: {
    color: 'grey'
  }
});


function mapDispatchToProps(dispatch) {
  return {
    onHandleClick: function(name, email, company) {
        dispatch( {type: 'selecteUser', punchline:punchline, name: name } )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(RepliquesScreen);
