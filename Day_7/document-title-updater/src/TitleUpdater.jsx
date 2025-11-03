import { useState, useEffect } from "react";
import './App.css';

function TitleUpdater() {
    const [customTitle, setCustomTitle] = useState("");
    const [defaultTitle] = useState(() => document.title);

    const MAX_CHARS = 60;
    const prefix = "React App - ";

    useEffect(() => {
        if (customTitle) {
        document.title = `${prefix}${customTitle}`;
        } else {
        document.title = defaultTitle;
        }

        return () => {
        document.title = defaultTitle;
        };
    }, [customTitle, defaultTitle]); 

    const handleTitleChange = (e) => {
        setCustomTitle(e.target.value);
    };

    const handleReset = () => {
        setCustomTitle("");
    };

    const previewText = customTitle ? `${prefix}${customTitle}` : defaultTitle;
    
    const charCountColor = customTitle.length > MAX_CHARS * 0.8 
        ? '#dc2626'
        : '#6b7280';

    return (
        <div>
            <div className="title-updater-card">
                <h1 className="title-updater-header">
                📝 Document Title Updater
                </h1>
                <div className="input-group">
                    <label htmlFor="title-input"    className="input-label">
                        Custom Title
                    </label>
                    <div className="input-wrapper">
                        <input
                            id="title-input"
                            type="text"
                            value={customTitle}
                            onChange={handleTitleChange}
                            maxLength={MAX_CHARS}
                            placeholder="Type here..."
                            className="title-input"
                        />
                        <span className="char-counter" style={{ color: charCountColor }}>
                            {customTitle.length}/{MAX_CHARS}
                        </span>
                    </div>
                </div>

                <div className="preview-section">
                    <p className="preview-label">Preview:</p>
                    <p className="preview-text">
                        "{previewText}"
                    </p>
                </div>

                <button
                    onClick={handleReset}
                    className="reset-button"
                >
                    Reset to Default
                </button>
            </div>
        </div>
    );
};

export default TitleUpdater;