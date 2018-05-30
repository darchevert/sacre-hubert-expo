import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {List, ListItem, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';

class RepliquesScreen extends React.Component {
  static navigationOptions = {
    title: 'Répliques',
    header: null
  };

  constructor() {
    super();
    this.state = {
      repliquesList: []
    }
  }

  async playSound() {
    try {
      const {tintouin, status} = await Expo.Audio.Sound.create(require('../assets/sounds/tintouin.mp3'), {shouldPlay: true});
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    var ctx = this;
    fetch('http://10.4.1.45:3000/users/').then(function(response) {
      return response.json();
    }).then(function(repliquesList) {
      ctx.setState({repliquesList});
    }).catch(function(error) {
      console.log('Request failed', error)
    });
  }

  render() {
    if (this.state.repliquesList.punchlines != undefined) {
      let array = ['name', 'punchline', 'sound', 'photo']
      this.state.repliquesList.punchlines.map(e => {
        for (el of array) {
          console.log(e[el]);
        }
      });

      var repliquesList = [];

      for (var i = 0; i < this.state.repliquesList.length; i++) {

        repliquesList.push(<ListItem onPress={() => this.playSound()} hideChevron="hideChevron" key={i} avatar={this.state.repliquesList.photo} title={this.state.repliquesList.punchline} subtitle={<View style = {
            styles.subtitleView
          } > <Text style={styles.ratingText}>{this.state.repliquesList[i].name}</Text>
        </View>}></ListItem>);
      }

      return (<ScrollView style={styles.container}>
        <List containerStyle={{
            marginBottom: 20
          }}>

          {repliquesList}

        </List>

        {/* <Login isVisible={true}/> */}

      </ScrollView>);
    }
    return (<View></View>);
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

function mapDispatchToProps(dispatch) {
  return {
    onHandleClick: function(name, email, company) {
      dispatch({type: 'selecteUser', punchline: punchline, name: name})
    }
  }
}

export default connect(null, mapDispatchToProps)(RepliquesScreen);
