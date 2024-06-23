export interface IToDoItem {
  id: number ;
  title: string;
  description: string;
  deadline: string;
  done: boolean;

}
export interface IToDoList {
  list: IToDoItem[];
}
export interface IFormdata {
  id: number | string;
  title: string;
  description: string|"";
  deadline: string|"";
  done: boolean;
}

export interface AddItemPayload {
  title: string;
  description: string;
  deadline:string;
}

export interface EditItemPayload {
  id: number ;
  title: string;
  description: string;
  deadline:string;
  done: boolean;
}

export interface ToggleDonePayload {
  id: number |string;
  done: boolean;
}

export interface DeleteItemPayload {
  id: number |string;
}