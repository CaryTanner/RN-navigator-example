import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View, StyleSheet, Button, ActivityIndicator} from 'react-native';
import Center from '../components/Center';
import {typo} from '../constants/index';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from './AuthProvider';
import AppTabs from './AppTabs';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

export default function Routes(props) {
  const {user, login} = useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    AsyncStorage.getItem('user')
      .then((userString) => {
        setLoading(false);
        if (userString) {
          console.log(userString);
          login();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: typo.main,
  },
});
