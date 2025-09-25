// 7.14 Task Objects
// import { atom } from "recoil";

// export interface ITodo {
//   id: number;
//   text: string;
// }
// interface IToDoState {
//   [key: string]: ITodo[];
// }

// export const toDoState = atom<IToDoState>({
//   key: "toDo",
//   default: {
//     "To Do": [],
//     Doing: [],
//     Done: [],
//   },
// });

// final
import { atom } from "recoil";
import { loadToDos } from "./local";

export interface IToDo {
  id: number;
  text: string;
}

export interface IToDoState {
  [key: string]: IToDo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: loadToDos() ?? {},
});
