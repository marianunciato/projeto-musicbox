import React from "react"
import { MenuItem } from "./menuItem"

export const MenuList = () => {
    return (
        <>
            <ul className="flex-1 px-3 text-white list-options">
                <MenuItem icon={<span className='material-symbols-outlined'>home</span>} text="Menu"/>
                <MenuItem icon={<span className='material-symbols-outlined'>apparel</span>} text="Acessórios"/>
                <MenuItem icon={<span className='material-symbols-outlined'>radio</span>} text="Decoração"/>
                <MenuItem icon={<span className='material-symbols-outlined'>album</span>} text="CD's e Vinís"/>
                <MenuItem icon={<span className='material-symbols-outlined'>speaker</span>} text="Equipamentos de Som"/>
                <MenuItem icon={<span className='material-symbols-outlined'>favorite</span>} text="Meus favoritos"/>
                <MenuItem icon={<span className='material-symbols-outlined'>shopping_bag</span>} text="Minha sacola"/>
            </ul>
        </>
    )
}