// app/loading.tsx
import { FaUtensils } from "react-icons/fa"; // Restaurant icon from react-icons

export default function Loading() {
  return (
    <div className="loader-overlay">
      <FaUtensils className="loader-icon" />
      <div className="loader-text">Cooking Something Special...</div>
    </div>
  );
}
