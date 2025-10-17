import { Draggable, Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DragabbleCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IToDo, IToDoState, toDoState } from "../atoms";
import { useRecoilState } from "recoil";
import { saveToDos } from "../local";
const Wrapper = styled.div`
  width: 340px;
  padding: 12px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.boardColor};
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  &.dragging {
    filter: drop-shadow(0 0 10px #053d5f);
  }
`;
