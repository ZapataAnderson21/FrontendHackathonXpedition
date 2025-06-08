import { useEffect, useState } from "react";

const initialWorkMinutes = 25;
const initialBreakMinutes = 5;

export default function Chronometer() {
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const [timeLeft, setTimeLeft] = useState(initialWorkMinutes * 60);

  useEffect(() => {
    const storedTime = localStorage.getItem("chrono-timeLeft");
    const storedRunning = localStorage.getItem("chrono-isRunning");
    const storedWork = localStorage.getItem("chrono-isWork");

    const noStorage =
      storedTime === null && storedRunning === null && storedWork === null;

    if (noStorage) {
      setIsFirstTime(true);
    } else {
      if (storedTime) setTimeLeft(parseInt(storedTime));
      if (storedRunning) setIsRunning(storedRunning === "true");
      if (storedWork) setIsWork(storedWork === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chrono-timeLeft", timeLeft.toString());
    localStorage.setItem("chrono-isRunning", isRunning.toString());
    localStorage.setItem("chrono-isWork", isWork.toString());
  }, [timeLeft, isRunning, isWork]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) return prev - 1;

          const newIsWork = !isWork;
          setIsWork(newIsWork);
          return newIsWork ? initialWorkMinutes * 60 : initialBreakMinutes * 60;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isWork]);

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div
      id="chrono-box"
      className={`group fixed top-18 right-0 p-4 ${
        isWork ? "bg-blue-600" : "bg-sky-400"
      } shadow-md rounded-lg m-4 z-20 transition-all`}
    >
      {!isRunning && (
        <div className="text-center absolute -top-6 right-1 bg-white text-blue-600 text-xs font-semibold px-2 py-1 rounded shadow animate-bounce z-30">
          {isFirstTime ? "Descubrir Pomodoro" : "Seguir con mis actividades"}
        </div>
      )}

      <div className="flex items-center gap-4">
        <span className="text-white font-bold text-lg">
          {formatTime(timeLeft)}
        </span>

        <button
          type="button"
          onClick={toggleTimer}
          className="hidden group-hover:block bg-white text-blue-600 font-bold px-3 py-1 rounded shadow hover:bg-gray-100 transition"
        >
          <span className="cursor-pointer">
            {isRunning ? (
              <div className="w-6 h-6">
                {/* Pause Icon */}
                <svg fill="#155dfc" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.44 0.576t-0.576 1.44v16.16zM18.016 24.096q0 0.832 0.608 1.408t1.408 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.408 0.576t-0.608 1.44v16.16z"></path>
                </svg>
              </div>
            ) : (
              <div className="w-6 h-6">
                {/* Play Icon */}
                <svg viewBox="-3 0 28 28" xmlns="http://www.w3.org/2000/svg" fill="#155dfc">
                  <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" transform="translate(-419.000000, -571.000000)"></path>
                </svg>
              </div>
            )}
          </span>
        </button>

        <span className="hidden group-hover:block text-white font-semibold">
          {isWork ? "Pomodoro" : "Descanso"}
        </span>
      </div>
    </div>
  );

}
