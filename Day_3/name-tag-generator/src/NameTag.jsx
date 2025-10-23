import { useState } from "react";
import './App.css'

function NameTag() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');

    const formattedName = name.trim() || "Your Name";
    const formattedTitle = title.trim() || "Your title";
    const formattedCompany = company.trim() || "Your Company";

    function handleDownload() {
        alert(`
            Name: ${formattedName}
            Title: ${formattedTitle}
            Company: ${formattedCompany}`
        )
    }


    return (
        <div className="infos">
            <h1>Name Tag Generator</h1>
            <div className="input-cont">
                <label>Name:</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                />
                <label>Title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your title..."
                />
                <label>Company:</label>
                <input 
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enter your company..."
                />
            </div>
            <div className="info-cont">
                <p>Hello, my name is</p>
                <h2>{formattedName}</h2>
                <h4>{formattedTitle}</h4>
                <h5>{formattedCompany}</h5>
            </div>

            <div className="btn">
                <button onClick={handleDownload}>Download</button>
            </div>
            
        </div>
    )
}

export default NameTag;