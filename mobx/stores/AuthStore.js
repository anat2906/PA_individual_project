import {types} from "mobx-state-tree";
import UserModel from "../models/UserModel";
import { maybeNull } from "mobx-state-tree/dist/internal";

const AuthStore = types
.model("AuthStore", {
    user: maybeNull(UserModel)
    })