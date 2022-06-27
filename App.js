import React from "react";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StoriesPage from "./screens/StoriesPage";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "black",
            tabBarIndicatorStyle: {
              backgroundColor: "red",
            },
            tabBarLabelStyle: { fontSize: 9.25 },
          }}
        >
          <Tab.Screen
            name="Top Stories"
            children={() => <StoriesPage topic="Top Stories" />}
          />
          <Tab.Screen
            name="Business"
            children={() => <StoriesPage topic="business" />}
          />
          <Tab.Screen
            name="Tech"
            children={() => <StoriesPage topic="technology" />}
          />
          <Tab.Screen
            name="Sports"
            children={() => <StoriesPage topic="sports" />}
          />
          <Tab.Screen
            name="Science"
            children={() => <StoriesPage topic="science" />}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
