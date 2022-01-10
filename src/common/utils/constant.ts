import {Dimensions, Platform} from 'react-native';

const _screen_width = Dimensions.get('window').width;
const _screen_height =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get(
        'REAL_WINDOW_HEIGHT',
      );
export {_screen_height, _screen_width};
