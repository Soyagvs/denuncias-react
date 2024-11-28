import FaceID from "/FaceID.png"
import { BtnHeroDenunciar } from "../ui/BtnHeroDenunciar"

export const Hero = () => {
    return (
        <main className="max-w-[807px] mx-auto h-[900px] flex max-md:flex-col">
            <div className="flex flex-col gap-10">
                <h1 className="md:text-8xl w-[508px] pt-36 leading-tight font-medium ">
                    <span className="uppercase bg-blue-500">Denuncia</span> a los <span className="uppercase underline decoration-red-500 decoration-[20px]">cbu</span>
                </h1>
                <h2 className="text-base max-w-[508px] text-[#191919] leading-tight">
                    Reporta actividades sospechosas asociadas a cuentas bancarias de manera rápida, segura y confidencial. Juntos podemos combatir el fraude y proteger a nuestra comunidad.
                </h2>
                <BtnHeroDenunciar />
            </div>
            <div className="flex justify-center items-center w-72 ml-12 mb-44">
                <img src={FaceID} alt="FaceID invalid" />
            </div>
        </main>
    )
}
