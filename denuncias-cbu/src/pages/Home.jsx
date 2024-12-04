import { useState } from "react";
import { Box } from "../sections/Box";


export const Home = () => {
  const [activeTab, setActiveTab] = useState("buscar"); // Estado que controla la pestaña activa

  // Títulos dinámicos según la pestaña activa
  const titles = {
    buscar: "Busca en esta lista de denuncias para no caer en las estafas, puedes indicar como denunciar si reconoces el CBU.",
    denunciar: "Denuncia los CBU que no se haya denunciado para que otras persona este atenta a no caer en estafas."
  };

  return (
    <main className="max-w-[870px] mx-auto">
      
      <div className="flex justify-start items-center text-red-500 font-semibold mt-7">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
        <a href="/" >Volver atras</a>
      </div>
      
      {/* Título dinámico según la pestaña activa */}
      <h2 className="text-base text-center">{titles[activeTab]}</h2>

      {/* Pasar estado y setState a Box para cambiar la pestaña */}
      <Box activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
};
