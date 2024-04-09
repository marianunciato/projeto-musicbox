import React from 'react';
import NoImage from '/home/fullcam/Documentos/not work/projetos de estudo/projeto-musicbox/web-musicbox/src/assets/no-image.png'

const Item = ({ imageURL }) => {
    
    return (
        <card className='itemVenda flex flex-wrap justify-center m-7 p-7 h-96 w-80  border hover:border hover:border-amber-400 rounded-3xl cursor-pointer'>
            <div>
                {imageURL ? (
                    <img src={imageURL} alt="Selected Image" />
                ) : (
                    <img src={NoImage}/>
                )}
            </div>
            <div className='itemTexto flex flex-wrap items-center'>
                <p className='itemNome flex font-medium text-lg'> Produto não disponível </p>
                <p className='itemPreco flex justify-self-end font-medium text-2xl'> R$ --,--</p>
            </div>
            <div className='itemOptions flex justify-center items-center gap-3 mt-4'>
                <button className='itemNome flex justify-center font-medium text-md w-52 bg-amber-300 hover:bg-amber-200 px-6 py-2 rounded-full'> -- </button>
                <span className='material-symbols-outlined flex text-black hover:text-amber-300 cursor-pointer'>
                    favorite
                </span>
            </div>
        </card>
        
    );
};

export default Item;