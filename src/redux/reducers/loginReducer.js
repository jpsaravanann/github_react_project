import loginJson from "../../jsonFiles/loginDetails.json"
const initialState = {
    userName: 'test',
    orgUserName: loginJson.username,
    password: '',
    empJson:''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN': {
        return {
        ...state,
        [action.key]: action.value,
      }
    }
    default: {
      return state;
    }
  }
};
export default loginReducer;