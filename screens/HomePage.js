import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopStories from './TopStories';
import BusinessNews from './BusinessNews';
import TechNews from './TechNews';
import SportsNews from './SportsNews';

const Tab = createMaterialTopTabNavigator();

const HomePage = () => {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'black',
            indicatorStyle: {
              backgroundColor: 'red',
            },
          }}
        >
          <Tab.Screen name="Top Stories" component={TopStories} />
          <Tab.Screen name="Business" component={BusinessNews} />
          <Tab.Screen name="Tech" component={TechNews} />
          <Tab.Screen name="Sports" component={SportsNews} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default HomePage;
