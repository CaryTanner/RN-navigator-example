import React, {useContext, useEffect, useRef, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Center from '../components/Center';
import {Text, FlatList, Button, StyleSheet} from 'react-native';
import {AuthContext} from './AuthProvider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import faker from 'faker';
import {addProductRoutes} from './addProductRoutes';

const Stack = createStackNavigator();

const Feed = ({navigation}) => {
  return (
    <Center>
      <FlatList
        style={styles.listContainer}
        renderItem={({item}) => {
          let name = {};
          if (item) {
            name = item;
          }
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate('Product', {
                  name,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, i) => product + i}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
};

export const HomeStack = () => {
  const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      {addProductRoutes(Stack)}
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => logout()}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});
