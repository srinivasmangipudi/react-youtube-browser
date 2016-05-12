
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator
} = React;

var PlayerView = require('./components/PlayerView');
var VideoListView = require('./components/VideoListView');

var App = React.createClass({
  renderScene: function(route, nav) {
    if (route.name == 'list') {
      return (
        <VideoListView
          navigator={nav}
          playlistID="PLF76F25F55798FDBC"
        />
      );
    } else {
      return (
        <PlayerView
          navigator={nav}
          videoID={route.videoID}
        />
      );
    }
  },
  render: function() {
    return (
      <Navigator
        style={{flex: 1, backgroundColor: 'black'}}
        initialRoute={{name: 'list'}}
        renderScene={this.renderScene}
      />
    );
  }
});

AppRegistry.registerComponent('App', () => App);

/*'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image
} = React;

var Icon = require('react-native-vector-icons/MaterialIcons');
var CardView = require('./components/CardView');
var AnimatedProgressView = require('./components/AnimatedProgressView');


var TemplateApp = React.createClass({
  render: function() {
    return (
      <CardView title="youtube-browser">
        <Text style={styles.welcome}>
          It worked! This is a template React Native app to get you started.
          {'\n\n'}Try editing <Text style={{fontWeight: 'bold'}}>
          youtube-browser/index.js</Text> in your app directory and pushing
          the changes.
        </Text>
        <Text style={styles.icons}>
          <Icon name="alarm" size={36} />
          <Icon name="backup" size={36} />
          <Icon name="done" size={36} />
          <Icon name="home" size={36} />
          <Icon name="face" size={36} />
          <Icon name="flight-takeoff" size={36} />
          <Icon name="grade" size={36} />
          <Icon name="room" size={36} />
        </Text>
        <AnimatedProgressView />
        <Image
          style={{height: 180}}
          resizeMode={Image.resizeMode.cover}
          source={require('./landscape.png')}
        />
      </CardView>
    );
  }
});

var styles = StyleSheet.create({
  welcome: {
    fontSize: 17,
    color: '#636363',
    margin: 10
  },
  icons: {
    letterSpacing: 15,
    color: '#999898',
    margin: 10
  }
});

AppRegistry.registerComponent('App', () => TemplateApp);*/
