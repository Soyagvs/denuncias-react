import { BtnVer } from "../ui/BtnVer"

export const Card = () => {
    return (
        <div className="h-20 flex justify-between items-center border">
            <div className="flex items-center gap-3">
                <div className="rounded-full w-14 h-14 bg-slate-300 ml-3"></div>
                <h3>00000000000000000000000000000000000000000</h3>
            </div>
            <div className="flex items-center gap-3 mr-3 ">
                <BtnVer />
            </div>

        </div>
    )
}
