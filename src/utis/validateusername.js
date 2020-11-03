import {LOGIN_TYPE} from '../payloads/constants';

export function validate(user){
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(user.length==10 && Number(user) != NaN)
    {
      return LOGIN_TYPE.MOBILE;
    }
    else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user))
    {
      return LOGIN_TYPE.EMAIL
    }
    else{
        return "invalid"
    }
}