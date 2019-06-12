import { types } from "mobx-state-tree";

const UserModel = types.model({
  email: types.string,
  username: types.string,
  first_name: types.string,
  last_name: types.string
});

export default UserModel