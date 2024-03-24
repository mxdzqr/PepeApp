import * as React from 'react';
import {Button, Text, useColorScheme, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TestScreen} from '../screens/Test';

export function BottomBar(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  const HomeScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {/*<Button*/}
      {/*  title="Go to Details"*/}
      {/*  onPress={() => navigation.navigate('Settings')}*/}
      {/*/>*/}
    </View>
  );

  const DetailsScreen = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Scree</Text>
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Settings"
        component={TestScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </Tab.Navigator>
  );
}
