import { Icon } from "astro-icon/components";
import SubTask from "./SubTask.astro";

interface Props {
  title: string;
  description: string;
  dueDate: string;
  typeTask: string;
  points: number;
}

export default function WeekTasks({ title }: Props) {
  return (
    <div>
      <div className="flex flex-row justify-between bg-white border-l-8 border-[#0045ba] rounded-sm py-4 px-5 shadow-md cursor-pointer hover:bg-gray-50">
        <p className="text-xl font-bold">{title}</p>
        <div className="flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 1024 1024"><path d="M797.867 354.133c-17.067-17.067-42.667-17.067-59.733 0l-226.133 226.133-226.133-226.133c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l256 256c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8l256-256c17.067-17.067 17.067-42.667 0-59.733z"></path></svg>
        </div>
      </div>
      <div className="flex flex-col py-4">
        <SubTask name="Tema 01" typeForum="Calificado" />
        <SubTask name="Tema 02" typeForum="No Calificado" />
        <SubTask name="Tema 03" typeForum="Calificado" />
      </div>
    </div>
  );
}
