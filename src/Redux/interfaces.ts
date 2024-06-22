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
