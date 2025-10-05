import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;

const ToggleBtn = styled.div`
  background-color: #4c7ea2;
  color: white;
  border: none;
  width: 300px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #276894;
    transition: background-color 0.1s ease-in-out;
  }
`;
