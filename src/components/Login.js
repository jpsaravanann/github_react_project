import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { setLoginData } from "../redux/actions/loginAction";
import { connect } from 'react-redux';
import { Container, Icon, Button, Form, Item, Input, Label, Toast } from 'native-base';

class Home extends React.Component {
  onSubmit = () => {
    this.props.reduxLogin('userName', '')
  };

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <ScrollView bounces={false} style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 30 }}>
              <View>
                <Text style={{ alignSelf: "center", fontSize: 35, color: 'green', marginTop: 60, marginBottom: 100 }}>Login</Text>
                <Form>
                  <Item rounded style={{ marginBottom: 20, backgroundColor: 'green', paddingLeft: 7 }}>
                    <Icon active name='ios-lock-open-sharp' />
                    <Input style={{ color: 'green' }} placeholder={'username'} />
                  </Item>
                  <Item rounded style={{ marginBottom: 40, backgroundColor: 'green', paddingLeft: 7 }}>
                    <Icon active name='ios-lock-open-sharp' />
                    <Input secureTextEntry placeholder={"password"} style={{ color: 'green' }} />
                  </Item>
                </Form>
                <TouchableOpacity >
                  <Icon name="arrow-right-circle" type="SimpleLineIcons" style={{ color: 'green', fontSize: 50, alignSelf: "center" }} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    userName: state.loginReducer.userName,
    password: state.loginReducer.password,
    empJson: state.loginReducer.empJson,
    orgUserName: state.loginReducer.orgUserName,
    state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    reduxLogin: (key, value) => dispatch(setLoginData(key, value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);