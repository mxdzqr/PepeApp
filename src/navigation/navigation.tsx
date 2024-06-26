import * as React from 'react';
import {Text, View, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { BottomBar } from "./bottomBar.tsx";

export function Navigation(): React.JSX.Element {
  const Stack = createStackNavigator();

  const HomeScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );

  const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <BottomBar />
    </View>
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Welcome kek!',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Welcome kek!',
          headerBackTitle: 'Назад',
        }}
      />
    </Stack.Navigator>
  );
}
