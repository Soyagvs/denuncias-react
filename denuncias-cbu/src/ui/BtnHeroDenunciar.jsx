import { Link } from "react-router-dom"

export const BtnHeroDenunciar = () => {
    return (
        <Link to="/home">
            <div className="bg-black w-48 h-10 mt-5">
                <button className="bg-blue-500 text-xl w-48 h-10 flex justify-center items-center text-white hover:translate-y-2 hover:translate-x-2 transition-all">
                    Denunciar
                </button>
            </div>
        </Link>
    )
}
