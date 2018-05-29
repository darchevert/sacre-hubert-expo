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
      this.state = {
        repliquesList:[]
      }
  }

  async playSound() {
      try {
        const {tintouin, status} = await Expo.Audio.Sound.create(require('../assets/sounds/tintouin.mp3'), {shouldPlay: true});
      } catch (error) {
        console.log(error);
      }
    }


   componentDidMount(){
     var ctx = this;
     fetch('http://10.4.1.45:3000/users/')
      .then(function(response) {
          return response.json();
      })
      .then(function(repliquesList) {
         ctx.setState({repliquesList});
         console.log(this.state.repliquesList);
      })
      .catch(function(error) {
          console.log('Request failed', error)
      });
   }

  render() {

    var repliquesList = [];

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
