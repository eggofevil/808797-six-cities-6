import {combineReducers} from 'redux';
import appData from './app-data/app-data';
import appLogic from './app-logic/app-logic';
import user from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  LOGIC: `LOGIC`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.LOGIC]: appLogic,
  [NameSpace.USER]: user
});
