import { useEffect } from "react";

interface ActivityProps {
  name: string;
  typeActivity: string;
  course: string;
  isRated?: boolean;
  importance?: "Importante" | "No Importante";
  urgency?: boolean;
}

export default function Activity({
  name,
  typeActivity,
  course,
  isRated = false,
  importance = "No Importante",
  urgency = false
}: ActivityProps) {
  let svgIcon: React.ReactNode = "Notes";

  switch (typeActivity) {
    case "FORUM":
      svgIcon = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="bubble-square"> <path d="M7.7,18.3H19.4a2.1,2.1,0,0,0,2.1-2.1V4.6a2.1,2.1,0,0,0-2.1-2.1H4.6A2.1,2.1,0,0,0,2.5,4.6V21.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path> </g> </g> </g></svg>;
      break;
    case "ASSIGNMENT":
      svgIcon = <svg viewBox="0 0 24 24" data-name="025_SCIENCE" id="_025_SCIENCE" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20,22H5a1,1,0,0,1-1-1V3A1,1,0,0,1,5,2H20a1,1,0,0,1,1,1V18a1,1,0,0,1-2,0V4H6V20H20a1,1,0,0,1,0,2Z"></path><path d="M7,7H3A1,1,0,0,1,3,5H7A1,1,0,0,1,7,7Z"></path><path d="M7,11H3A1,1,0,0,1,3,9H7a1,1,0,0,1,0,2Z"></path><path d="M7,15H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"></path><path d="M7,19H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"></path><path d="M15,11H11a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"></path><path d="M15,15H11a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"></path></g></svg>;
      break;
    case "EXAM":
      svgIcon = <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M261.489,66.973L197.412,2.895C195.558,1.041,193.044,0,190.423,0H42.499c-5.458,0-9.884,4.426-9.884,9.883v277.233 c0,5.458,4.426,9.884,9.884,9.884h212.002c5.458,0,9.884-4.426,9.884-9.884V73.961C264.385,71.34,263.343,68.826,261.489,66.973z M200.307,33.745l30.333,30.333h-30.333V33.745z M52.383,277.232V19.767h128.156v54.194c0,5.459,4.426,9.884,9.884,9.884h54.194 v193.388H52.383z"></path> <path d="M149.523,136.676c-1.501-3.753-5.136-6.213-9.178-6.213c-4.041,0-7.676,2.46-9.177,6.213l-32.615,81.539 c-2.027,5.068,0.438,10.819,5.506,12.848c5.066,2.025,10.819-0.439,12.848-5.507l4.037-10.095h38.803l4.037,10.095 c1.547,3.864,5.258,6.216,9.181,6.216c1.222,0,2.464-0.229,3.667-0.709c5.068-2.028,7.534-7.779,5.507-12.848L149.523,136.676z M128.852,195.693l11.494-28.735l11.495,28.735H128.852z"></path> <path d="M211.553,133.428h-7.952v-8.002c0-5.458-4.426-9.883-9.884-9.883c-5.458,0-9.883,4.425-9.883,9.883v8.002h-7.952 c-5.459,0-9.884,4.425-9.884,9.883c0,5.459,4.425,9.884,9.884,9.884h7.952v8.002c0,5.458,4.425,9.884,9.883,9.884 c5.458,0,9.884-4.426,9.884-9.884v-8.002h7.952c5.458,0,9.884-4.425,9.884-9.884C221.436,137.852,217.011,133.428,211.553,133.428z "></path> </g> </g></svg>;
      break;
    case "PROJECT":
      svgIcon = <svg viewBox="0 0 480 480" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>project-configuration</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="currentColor" transform="translate(42.666667, 42.666667)"> <path d="M277.333333,234.666667 L277.333,255.999667 L298.666667,256 L298.666667,298.666667 L277.333,298.666667 L277.333333,426.666667 L256,426.666667 L256,298.666667 L234.666667,298.666667 L234.666667,256 L256,255.999667 L256,234.666667 L277.333333,234.666667 Z M341.333333,234.666667 L341.333,341.332667 L362.666667,341.333333 L362.666667,384 L341.333,383.999667 L341.333333,426.666667 L320,426.666667 L320,383.999667 L298.666667,384 L298.666667,341.333333 L320,341.332667 L320,234.666667 L341.333333,234.666667 Z M405.333333,234.666667 L405.333,277.332667 L426.666667,277.333333 L426.666667,320 L405.333,319.999667 L405.333333,426.666667 L384,426.666667 L384,319.999667 L362.666667,320 L362.666667,277.333333 L384,277.332667 L384,234.666667 L405.333333,234.666667 Z M170.666667,7.10542736e-15 L341.333333,96 L341.333,213.333 L298.666,213.333 L298.666,138.747 L192,200.331 L192,323.018 L213.333,311.018 L213.333333,320 L234.666667,320 L234.666,348 L170.666667,384 L3.55271368e-14,288 L3.55271368e-14,96 L170.666667,7.10542736e-15 Z M42.666,139.913 L42.6666667,263.04 L149.333,323.022 L149.333,201.497 L42.666,139.913 Z M170.666667,48.96 L69.246,105.991 L169.656,163.963 L271.048,105.424 L170.666667,48.96 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>;
      break;
    default:
      svgIcon = <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g> <path d="M0,218.241l20.913,15.158l118.904,86.199v132.866l103.404-57.892l92.52,67.064L512,50.363L0,218.241z M57.326,227.202L442.817,100.81L156.609,299.193L57.326,227.202z M166.202,407.459v-68.74l53.494,38.786L166.202,407.459z M324.494,420.906L172.776,310.92L455.69,114.808L324.494,420.906z"></path> </g> </g></svg>;
  }

  let borderColor = "border-gray-300";
  let shadowColor = "shadow-gray-300";

  if (importance === "Importante" && urgency) {
    borderColor = "border-[#e53935]";
    shadowColor = "shadow-[0_0_0_1px_#e538354d]";
  } else if (importance === "Importante") {
    borderColor = "border-[#fbc02d]";
    shadowColor = "shadow-[0_0_0_1px_#fbc12d4d]";
  } else {
    borderColor = "border-[#43a047]";
    shadowColor = "shadow-[0_0_0_1px_#43a0484d]";
  }

  const ratedText = isRated ? "Calificada" : "No Calificada";
  const ratedClass = isRated ? "bg-[#000f37]" : "bg-[#ffab00]";
  const importanceOptions = "flex";

  useEffect(() => {
    const groups = document.querySelectorAll(".importance-group");
    groups.forEach(group => {
      const upBtn = group.querySelector(".importance-up");
      const downBtn = group.querySelector(".importance-down");

      const activeClassUp = "bg-[rgba(7,212,208,0.35)]";
      const activeClassDown = "bg-[rgba(224,76,101,0.35)]";

      upBtn?.addEventListener("click", () => {
        upBtn.classList.add(activeClassUp);
        downBtn?.classList.remove(activeClassDown);
      });

      downBtn?.addEventListener("click", () => {
        downBtn.classList.add(activeClassDown);
        upBtn?.classList.remove(activeClassUp);
      });
    });
  }, []);

  return (
    <div className="flex flex-col rounded-br-sm rounded-bl-sm">
      <div className={`flex flex-row justify-between items-center w-full border-l-4 ${borderColor} shadow-2xl ${shadowColor} bg-white h-full py-4 px-5 gap-4 rounded-sm cursor-pointer hover:bg-gray-50`}>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-4 flex items-start">
            {/* Reemplaza esto con tu SVG correspondiente */}
            <div className="w-4 h-4 text-[#4a5565]">{svgIcon}</div>
          </div>
          <div className="flex flex-col gap-0.5 sm:w-40 md:w-40 lg:w-28">
            <span className="text-gray-500 text-sm">{typeActivity}</span>
            <p className="font-bold">{name}</p>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center border border-[#0661fc] text-[#0661fc] rounded-md px-4 py-3 gap-1 hover:bg-[rgba(6,96,252,0.1)] transition-colors duration-200 cursor-pointer">
          <div className="w-6 h-6">
            <svg viewBox="0 0 22 22" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 4.5C6.67157 4.5 6 5.17157 6 6V15.4013C6.44126 15.1461 6.95357 15 7.5 15H18V4.5H7.5ZM18 16.5H7.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H18V16.5ZM4.5 18L4.5 6C4.5 4.34315 5.84315 3 7.5 3H18.75L19.5 3.75V21H7.5C5.84315 21 4.5 19.6569 4.5 18Z" fill="currentColor"></path> </g></svg>
          </div>
          <span className="text-sm font-bold truncate max-w-[130px]" title={course}>{course}</span>
        </div>
        <div className={`hidden sm:flex flex-row items-center justify-center gap-1 rounded-full ${ratedClass} py-[4px] px-3 text-[12px] font-bold text-white text-center w-[96px]`}>
          <p>{ratedText}</p>
        </div>
        <div className="hidden lg:flex flex-col items-end">
          <span className="font-bold">Desde: 24/03/25 a las 12:00 a.m.</span>
          <span className="font-bold">Hasta: 24/03/25 a las 12:00 a.m.</span>
        </div>
        <div className={`${importanceOptions} importance-group flex-row items-center justify-center gap-4`}>
          <div tabIndex={0} className="importance-up rounded-full border-2 border-[#07d4cf] text-[#07d4cf] p-1 hover:bg-[rgba(7,212,208,0.1)] transition-all duration-100 cursor-pointer">
            <div className="w-6 h-6 text-[#07d4cf]"><svg fill="currentColor" width="24" height="24" viewBox="0 0 1024 1024"><path d="M797.867 610.133l-256-256c-17.067-17.067-42.667-17.067-59.733 0l-256 256c-17.067 17.067-17.067 42.667 0 59.733s42.667 17.067 59.733 0l226.133-226.133 226.133 226.133c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733z"></path></svg></div>
          </div>
          <div tabIndex={0} className="importance-down rounded-full border-2 border-[#e04c65] text-[#e04c65] p-1 hover:bg-[rgba(224,76,101,0.1)] transition-all duration-100 cursor-pointer">
            <div className="w-6 h-6 text-[#e04c65]"><svg fill="currentColor" width="24" height="24" viewBox="0 0 1024 1024"><path d="M797.867 354.133c-17.067-17.067-42.667-17.067-59.733 0l-226.133 226.133-226.133-226.133c-17.067-17.067-42.667-17.067-59.733 0s-17.067 42.667 0 59.733l256 256c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8l256-256c17.067-17.067 17.067-42.667 0-59.733z"></path></svg></div>
          </div>
        </div>
      </div>
    </div>
  );
}
