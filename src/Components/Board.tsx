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

const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 6px;
`;
const DeleteBoard = styled.div`
  border-radius: 5px;
  height: 22px;
  width: 22px;
  text-align: center;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 58, 58, 0.582);
  }
`;
const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

interface IAreaProps {
  $isDraggingFromThis: boolean;
  $isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>``;

interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
  index: number;
}

interface IForm {
  toDo: string;
}
