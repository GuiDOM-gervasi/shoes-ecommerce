export interface Action {
  type: String;
  payload?: any;
}

export interface Store {
  counter: number;
}

export interface User {
  name: String;
  id?: Number;
}

export interface QueryUsers {
  users: User[];
}
