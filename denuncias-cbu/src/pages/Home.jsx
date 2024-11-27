import { useState } from "react";
import { Box } from "../sections/Box";


export const Home = () => {
  const [activeTab, setActiveTab] = useState("buscar"); // Estado que controla la pestaña activa

  // Títulos dinámicos según la pestaña activa
  const titles = {
    buscar: "Consulta en nuestra base de datos para verificar si el CBU ha sido registrado previamente como involucrado en delitos cibernéticos.",
    denunciar: "Denuncia los CBU sospechosos de manera sencilla siguiendo los pasos indicados. Asegúrate de adjuntar todas las pruebas necesarias para respaldar tu denuncia y contribuir a combatir los delitos cibernéticos."
  };

  return (
    <main className="max-w-[870px] mx-auto h-full">
      <a href="/">Home</a>
      {/* Título dinámico según la pestaña activa */}
      <h2 className="text-xl text-center pt-14 font-thin">{titles[activeTab]}</h2>
      
      {/* Pasar estado y setState a Box para cambiar la pestaña */}
      <Box activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
};
