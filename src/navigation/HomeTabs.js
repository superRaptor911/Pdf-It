import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CreatePDFMenu from '../components/CreatePDFMenu';
import CreationsList from '../components/CreationsList';
import {COLORS} from '../styles/Colors';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: COLORS.secondaryLight,
        },
        labelStyle: {
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: 20,
        },
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Create" component={CreatePDFMenu} />
      <Tab.Screen name="Creations" component={CreationsList} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
