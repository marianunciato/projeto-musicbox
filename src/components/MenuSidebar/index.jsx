import React, {useState, useEffect, createContext} from "react"
import {MenuList} from "./menuList";
import MusicBoxLogo from '../../assets/music-box.svg'
import '../MenuSidebar/menuSidebar.css';

export const SidebarContext = createContext(false);

export function MenuSidebar({text}) {
    const [expanded, setExpanded] = useState(window.innerWidth >= 860);

    const breakpoint = 768;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < breakpoint && expanded) {
                setExpanded(false);
            } else if (window.innerWidth >= breakpoint && !expanded) {
                setExpanded(true);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [expanded]);

    return (
        <aside className="h-100 overflow-y-auto">
            <nav className="h-screen flex flex-col bg-black shadow-sm">
                <div className="p-4 pb-2 pr-5 flex justify-between items-center">
                    <img src={MusicBoxLogo}
                         className={`overflow-hidden transition-all bg-black flex justify-center items-center ${
                             expanded ? "w-48 px-1 py-3 mx-3" : "w-0"
                         }`}
                         alt="Logo da Empresa"
                    />
                    {expanded ?
                        <button onClick={() => setExpanded(prev => !prev)}
                                className="p-1.5 mx-2 flex justify-center items-center outside-button rounded-r-lg z-10 text-white bg-yellow-300">
                            <span className='material-symbols-outlined text-black'>menu</span>
                        </button>
                        :
                        <button onClick={() => setExpanded((curr) => !curr)}
                                className="p-1.5 mt-2 mb-1 flex justify-center items-center rounded-lg text-white hover:bg-neutral-700">
                            <span className='material-symbols-outlined'>menu</span>
                        </button>
                    }
                </div>
                <SidebarContext.Provider value={expanded}>
                    <MenuList/>
                </SidebarContext.Provider>
                <div className="border-t border-white/20 flex px-5 py-4 text-white">
                    <div className='fotinha flex justify-center items-center'>
                        <span className='material-symbols-outlined text-yellow-300'>account_circle</span>
                    </div>
                    <div
                        className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold pb-1">David Bowie</h4>
                            <span className="text-xs text-white/70">ziggystardust@gmail.com</span>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    )
}
