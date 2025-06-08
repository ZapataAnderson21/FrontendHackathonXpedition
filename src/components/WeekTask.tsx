import { useEffect, useState } from "react";
import TaskSection from "./TaskSection";
import { ApiPath } from "../utils/apiPath";

interface Props {
  unitId: string;
  numberWeek: string;
  description: string;
}

interface Material {
  id: number;
  title: string;
  description: string;
  typeTask: string;
  dueDate: string;
  points: number;
}

export default function WeekMaterials({ unitId, numberWeek, description }: Props) {
  const unitIdn = unitId && !isNaN(Number(unitId)) ? parseInt(unitId) : 1;

  const [tasks, setMaterials] = useState<Material[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await fetch(`${ApiPath}tasks/by-unit/${unitIdn}`);
        if (!res.ok) {
          throw new Error("Failed to fetch units");
        }
        const data = await res.json();
        setMaterials(data);
      } catch (error) {
        console.error("Error fetching units:", error);
        setMaterials([]);
      }
    };

    fetchMaterials();
  }, [unitIdn]);

  const toggleVisibility = () => {
    console.log("Toggling visibility for week:", numberWeek);
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <div
        onClick={toggleVisibility}
        className="flex flex-row justify-between bg-white border-l-8 border-[#0045ba] rounded-sm py-4 px-5 shadow-md cursor-pointer hover:bg-gray-50"
      >
        <p className="text-xl font-bold">
          {numberWeek} - {description}
        </p>
        <div className="flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 1024 1024"><path d="M797.867 354.133c-17.067-17.067-42.667-17.067-59.733 0l-226.133 226.133-226.133-226.133c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l256 256c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8l256-256c17.067-17.067 17.067-42.667 0-59.733z"></path></svg>
        </div>
      </div>

      {isVisible && (
        <div className="mt-2">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskSection key={task.id} taskName={task.title} description={task.description} typeTask={task.typeTask} dueDate={task.dueDate} points={task.points} />
            ))
          ) : (
            <p className="text-gray-500">No hay contenido en este curso.</p>
          )}
        </div>
      )}
    </div>
  );
}
