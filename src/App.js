import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
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
        <div className='App flex w-100 justify-center'>
            <Navbar />
            <Sidebar />
            <div className='mainPage w-2/3 flex flex-wrap justify-center mt-28 place-content-evenly'>
                {/* <FileUpload onFileSelect={handleFileSelect}/>
                {isLoading && <p>Loading ...</p>}
                {imageURL && <Item imageURL={imageURL}/>} */}
                <Item imageURL={imageURL}/>
                <Item imageURL={imageURL}/>
                <Item imageURL={imageURL}/>
                <Item imageURL={imageURL}/>
                <Item imageURL={imageURL}/>
                <Item imageURL={imageURL}/>
                <Item imageURL={imageURL}/>
                <Item imageURL={imageURL}/>
                <Item imageURL={imageURL}/>
            </div>
            

        </div>
    );
};

export default App;