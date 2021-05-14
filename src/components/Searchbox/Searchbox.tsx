import React from "react"
import "./Searchbox.css"

interface SearchboxProps {
    handleInputChange: (value: string) => void;
}

const Searchbox = ({ handleInputChange }: SearchboxProps) =>
{
    return (
        <div className="searchbox-container">
            <input className="inp" placeholder="Enter a Shinobi's name" type="search"
                onChange={(e) => {
                     handleInputChange(e.target.value) 
                    //console.log(e.target.value);
                }}
            />
        </div>
    );
    
}

export default Searchbox;