import React, {useContext} from "react"
import { SidebarContext } from "./index"

export function MenuItem({text, active, icon}) {

    const expanded = useContext(SidebarContext)

    return (
        <li className={`
            relative flex items-center p-3 my-1
            font-medium rounded-md cursor-pointer
            group h-12 text-white
            ${
                active
                    ? "hover:bg-yellow-400 hover:text-black"
                    : "hover:bg-yellow-400 hover:text-black"
            }
        `}>
            {icon}
            <span className={`overflow-y-auto transition-all 
                ${
                    expanded ? "w-auto ml-3" : "w-0"
                }
            `}>
                {text}
            </span>
        </li>
    )
}
