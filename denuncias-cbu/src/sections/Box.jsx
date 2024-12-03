import { Card } from "../component/Card";
import { Search } from "../ui/Search";
import PropTypes from "prop-types";

export const Box = ({ activeTab, setActiveTab }) => {
  return (
    <section className="max-w-[936px] mt-7 rounded-lg">
      <div className="flex justify-start items-center h-9">
        <button
          className={`uppercase w-[135px] h-9 flex justify-center items-center cursor-pointer ${activeTab === "buscar" ? "bg-white text-black rounded-tl-lg" : "bg-[#e6e6e6] rounded-tl-lg"}`}
          onClick={() => setActiveTab("buscar")} // Cambia a "buscar"
        >
          Buscar
        </button>
        <button
          className={`uppercase w-[135px] h-9 flex justify-center items-center cursor-pointer ${activeTab === "denunciar" ? "bg-white text-black rounded-tr-lg" : "bg-[#e6e6e6] rounded-tr-lg"}`}
          onClick={() => setActiveTab("denunciar")} // Cambia a "denunciar"
        >
          Denunciar
        </button>
      </div>

      <div className=" bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg">


        <div className="h-16 flex justify-start items-center ml-6">
          {activeTab === "buscar" && <Search />}
        </div>

        <div className="flex flex-col m-3">
          {activeTab === "buscar" && (
            <div className="h-[500px] overflow-y-auto">
              <Card />

            </div>
          )}

          {activeTab === "denunciar" && (
            <div className="flex flex-col h-[500px] overflow-y-auto mx-auto items-center text-center justify-center w-[800px] text-[#1e1e1e]">
              <p>Las denuncias se hacen por medio de email, debes enviar el numero de cbu como asunto, y adjuntar pruebas de estafa con capturas en buena calidad para ser procesadas. Si el cbu ya esta denunciado podes de la misma forma adjuntar mas pruebas.</p>
              <a href="mailto:" className="mt-5 rounded-lg bg-red-500 w-48 h-8 flex justify-center items-center">


                Denunciar via Email
              </a>
              <p>Este proceso tarda 24 Hs.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Box.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};
