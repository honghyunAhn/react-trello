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
