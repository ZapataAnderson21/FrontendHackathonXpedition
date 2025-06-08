interface TaskSectionProps {
  taskName: string;
  description?: string;
  typeTask?: string;
  dueDate?: string;
  points?: number;
}

export default function TaskSection({ taskName, description, typeTask, dueDate, points }: TaskSectionProps) {
  
  let typeSpanish: string = "";
  
  switch (typeTask?.toUpperCase()) {
    case "QUIZ":
      typeSpanish = "Cuestionario";
      break;
    case "ASSIGNMENT":
      typeSpanish = "Tarea";
      break;
    case "EXAM":
      typeSpanish = "Examen";
      break;

    case "PROJECT":
      typeSpanish = "Proyecto";
      break;

    default:
      typeSpanish = "Actividad";
  }

  return (
    <div className="flex flex-col bg-gray-100 rounded-br-sm rounded-bl-sm px-8  py-[10px] first-of-type:pt-4 last-of-type:pb-4">
  <div className="flex flex-row justify-between items-center w-full bg-white h-full py-4 px-5 rounded-md border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-50 shadow-sm gap-4">
    <div className="flex flex-row gap-3 items-center">
      <div className="w-4 flex items-start">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="bubble-square"> <path d="M7.7,18.3H19.4a2.1,2.1,0,0,0,2.1-2.1V4.6a2.1,2.1,0,0,0-2.1-2.1H4.6A2.1,2.1,0,0,0,2.5,4.6V21.5Z" fill="none" stroke="#4a5565" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path> </g> </g> </g></svg>
      </div> 
      <div className="flex flex-col gap-0.5">
        <span className="text-gray-500 text-sm">{typeSpanish}</span>
        <p className="font-bold">{taskName}</p>
      </div>
    </div>
    <div className="hidden lg:flex flex-row items-center justify-center gap-1 rounded-full bg-[#fddc70] py-[4px] px-2 text-[12px] font-bold text-[#694900] text-center">
      <div className="w-4">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="alert-circle"> <g> <line fill="none" stroke="#694900" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"></line> <line fill="none" stroke="#694900" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"></line> <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#694900" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle> </g> </g> </g> </g></svg>
      </div>
      <p>Por entregar</p>
    </div>
    <div className="hidden md:flex flex-col items-end">
      <span className="font-bold">Disponible hasta: {dueDate}</span>
    </div>
    <div className="flex items-center justify-center border border-[#0661fc] text-[#0661fc] rounded-md px-4 py-3 gap-1 hover:bg-[rgba(6,96,252,0.1)] transition-colors duration-200 cursor-pointer">
      <span className="text-sm font-bold">{points} puntos</span>
    </div>
  </div>
</div>
  );
}
