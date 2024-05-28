import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {MenuSidebar} from './components/MenuSidebar';
import Item from './components/Item';
import FileUpload from './components/FileUpload'
import './App.css';

export const App =  () => {
    const [imageURL, setImageURL] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileSelect = (imageDataURL) => {
        setIsLoading(true);
        setImageURL(imageDataURL);
        setIsLoading(false);
    }
    
    return (
        <div className='App flex w-screen h-screen'>
            <MenuSidebar/>
            <div className='meuDeus'>
                <Navbar />
                <div className='plmDs flex flex-wrap pt-24'>
                    <Item imageURL={imageURL}/>
                    <Item imageURL={imageURL}/>
                    <Item imageURL={imageURL}/>
                </div>
            </div>
            {/*<div className='mainPage w-2/3 flex flex-wrap justify-center mt-28 place-content-evenly'>*/}
            {/*    <FileUpload onFileSelect={handleFileSelect}/>*/}
            {/*    {isLoading && <p>Loading ...</p>}*/}
            {/*    {imageURL && <Item imageURL={imageURL}/>}*/}
            {/*    <Item imageURL={imageURL}/>*/}
            {/*    <Item imageURL={imageURL}/>*/}
            {/*    <Item imageURL={imageURL}/>*/}
            {/*    <Item imageURL={imageURL}/>*/}
            {/*    <Item imageURL={imageURL}/>*/}
            {/*    <Item imageURL={imageURL}/>*/}
            {/*</div>*/}
        </div>
    );
};

export default App;