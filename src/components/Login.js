import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setLoginData } from "../redux/actions/loginAction";
import { connect } from 'react-redux';

 class Home extends React.Component {
  onSubmit = () => {
    this.props.reduxLogin('userName', '')
  };

    render () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trr</Text>
    </View>
  );
}
}


const mapStateToProps = (state) => {
    return {
        userName: state.loginReducer.userName,
        password: state.loginReducer.password,
        empJson: state.loginReducer.empJson,
        orgUserName:state.loginReducer.orgUserName,
        state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        reduxLogin: (key, value) => dispatch(setLoginData(key, value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);