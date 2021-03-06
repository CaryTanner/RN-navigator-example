import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Button, Text, FlatList, StyleSheet} from 'react-native';

import Center from '../components/Center';
import faker from 'faker';
import {addProductRoutes} from './addProductRoutes';

const Stack = createStackNavigator();

const Search = ({navigation}) => {
  const [show, setShow] = useState(false);
  return (
    <Center>
      <Button
        title="Search!"
        onPress={() => {
          setShow(true);
        }}
      />
      {show ? (
        <FlatList
          style={styles.listContainer}
          renderItem={({item}) => {
            return (
              <Button
                title={item}
                onPress={() => {
                  navigation.navigate('Product', {
                    name: item,
                  });
                }}
              />
            );
          }}
          keyExtractor={(product, i) => product + i}
          data={Array.from(Array(50), () => faker.commerce.product())}
        />
      ) : null}
    </Center>
  );
};

export const SearchStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});
