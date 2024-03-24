import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/navigation.tsx';
import {BottomBar} from './src/navigation/bottomBar.tsx';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="black"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />
      <BottomBar />
    </NavigationContainer>
  );
}

export default App;
