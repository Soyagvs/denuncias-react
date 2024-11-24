import { Card } from "../component/Card";
import { Search } from "../ui/Search";
import PropTypes from "prop-types";

export const Box = ({ activeTab, setActiveTab }) => {
  return (
    <section className="max-w-[936px] border mt-7 rounded-lg">
      <div className="flex justify-center items-center h-9">
        <button
          className={`uppercase w-[468px] h-full flex justify-center items-center cursor-pointer ${activeTab === "buscar" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("buscar")} // Cambia a "buscar"
        >
          Buscar
        </button>
        <button
          className={`uppercase w-[468px] h-full flex justify-center items-center cursor-pointer ${activeTab === "denunciar" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("denunciar")} // Cambia a "denunciar"
        >
          Denunciar
        </button>
      </div>

      <div className="h-16 border flex justify-center items-center">
        {activeTab === "buscar" && <Search />}
        {activeTab === "denunciar" && <p className="text-center">Sigue los pasos para denunciar</p>}
      </div>

      <div className="flex flex-col m-3">
        {activeTab === "buscar" && (
          <div className="max-h-[500px] overflow-y-auto">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        )}

        {activeTab === "denunciar" && (
          <div className="flex flex-col h-[500px] overflow-y-auto mx-auto items-start pt-40">
            <p>1. Presionar el boton para denunciar via Email.</p>
            <p>2. En Asunto pega el CBU a denunciar.</p>
            <p>3. En el Email da un breve resumen sobre la estafa y adjunta pruebas en buena calidad.</p>
            <p>4. Este proceso tarda 24 Hs para ser procesado correctamente.</p>
            <a href="mailto:" className="mt-5 rounded-lg bg-yellow-300 w-48 h-8 flex justify-center items-center">
              Denunciar via Email
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

Box.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};
