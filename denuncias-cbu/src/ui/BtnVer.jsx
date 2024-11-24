import { useState } from 'react';

export const BtnVer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
    "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPvDW8gBfklrVaTSSY2hp6mRtTOqMrKKYWg&s",
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <>
      <button
        className="w-20 h-9 bg-black text-white rounded-lg"
        onClick={openModal}
      >
        Ver
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto w-full">
            <h2 className="text-xl mb-4">Posible persona</h2>
            <div className="flex justify-center items-center mt-10">
              {/* Flecha retroceder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6 cursor-pointer ${currentImageIndex === 0 ? 'text-gray-400' : 'text-black'}`}
                onClick={prevImage}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>

              {/* Imagen actual */}
              <img src={images[currentImageIndex]} alt="imagen" className="w-72 h-80 mx-10 rounded-lg" />
              
              {/* Flecha avanzar */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6 cursor-pointer ${currentImageIndex === images.length - 1 ? 'text-gray-400' : 'text-black'}`}
                onClick={nextImage}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>

            <div className="flex justify-around items-center mt-10">
              <div>
                <h3>CBU :</h3>
                <h3>N~DNI :</h3>
                <h3>Nombres y apellidos :</h3>
              </div>
              <div>
                <h3>Provincia :</h3>
                <h3>Localidad :</h3>
                <h3>Posible direccion :</h3>
              </div>
            </div>

            <div className="mt-10 flex justify-center items-center">
              <h3>Cantidad de denuncias :</h3>
            </div>

            <div className="flex flex-col justify-center items-center mt-10">
              <h2>Pruebas</h2>
              <div className="flex-wrap flex gap-10 justify-center items-center mt-5">
                <div className="h-80 w-52 bg-gray-500"></div>
                <div className="h-80 w-52 bg-gray-500"></div>
                <div className="h-80 w-52 bg-gray-500"></div>
                <div className="h-80 w-52 bg-gray-500"></div>
                <div className="h-80 w-52 bg-gray-500"></div>
                <div className="h-80 w-52 bg-gray-500"></div>
              </div>
            </div>

            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
