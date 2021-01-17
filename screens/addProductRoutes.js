import React, {useEffect, useRef, useState} from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import Center from '../components/Center';

const Product = ({route, navigation}) => {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit this product"
        onPress={() => {
          navigation.navigate('EditProduct', {
            name: route.params.name,
          });
        }}
      />
    </Center>
  );
};

const callDB = (data) => {
  return console.log('form data ' + data);
};

const EditProduct = ({route, navigation}) => {
  const [formValue, setFormValue] = useState();
  const submitRef = useRef();

  submitRef.current = () => {
    callDB(formValue);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({submitRef});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Center>
      <Text> Edit </Text>
      <Text>{route.params.name}</Text>
    </Center>
  );
};

export const addProductRoutes = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="EditProduct"
        options={({route}) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  //submit  edit form
                  if (route.params.submitRef) {
                    route.params.submitRef.current();
                  }
                }}>
                <Text>DONE</Text>
              </TouchableOpacity>
            );
          },
        })}
        component={EditProduct}
      />
      <Stack.Screen
        name="Product"
        options={({route}) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
        component={Product}
      />
    </>
  );
};
