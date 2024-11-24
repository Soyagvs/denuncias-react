import { BtnHeroDenunciar } from "../ui/BtnHeroDenunciar"

export const Hero = () => {
    return (
        <main className="max-w-[870px] mx-auto h-screen">
            <div className="flex flex-col gap-10">
                <h1 className="text-9xl w-[870px] pt-36 leading-tight font-medium">
                    <span className="uppercase bg-blue-500">Denuncia</span> de los <span className="uppercase underline decoration-red-500 decoration-[20px]">cbu</span>
                </h1>
                <h2 className="text-xl font-thin max-w-[600px] ">
                    Reporta actividades sospechosas asociadas a cuentas bancarias de manera rápida, segura y confidencial. Juntos podemos combatir el fraude y proteger a nuestra comunidad.
                </h2>
            </div>
                <BtnHeroDenunciar />
        </main>
    )
}
