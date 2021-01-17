import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Center from '../components/Center';
import {AuthContext} from './AuthProvider';

export const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);
  return (
    <Center>
      <Text style={styles.text}>I'm a login</Text>
      <Button
        title="Go to register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button title="Login me in" onPress={() => login()} />
    </Center>
  );
};

export const Register = ({navigation}) => {
  return (
    <Center>
      <Text style={styles.text}>I'm a Register</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('Login')}
      />
    </Center>
  );
};

const Stack = createStackNavigator();

export default function AuthStack(props) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{
          header: () => null,
        }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerTitle: 'do the thing',
        }}
        component={Register}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});
