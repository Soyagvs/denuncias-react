import { useState } from "react";
import { Box } from "../sections/Box";

export const Home = () => {
  const [activeTab, setActiveTab] = useState("buscar"); // Estado que controla la pestaña activa

  // Títulos dinámicos según la pestaña activa
  const titles = {
    buscar: "Busca entre los denunciados para verificar si el CBU ya fue marcado como delito cibernetico.",
    denunciar: "Denuncia los CBU siguiendo los pasos y adjunta las pruebas!."
  };

  return (
    <main className="max-w-[870px] mx-auto h-auto">
      {/* Título dinámico según la pestaña activa */}
      <h2 className="text-xl text-center pt-14">{titles[activeTab]}</h2>
      
      {/* Pasar estado y setState a Box para cambiar la pestaña */}
      <Box activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
};
