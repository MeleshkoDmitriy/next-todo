"use client";
import { deleteTodo } from "@/actions/actions";
import { SquareX } from "lucide-react";

interface DeleteButtonProps {
  id: number;
}

export const DeleteButton = ({id}: DeleteButtonProps) => {
  return <SquareX onClick={() => deleteTodo(id)} strokeWidth={1} />;
};
