import React from 'react'
import "../scss/Loader.scss";

const LoadingComponent: React.FC<{ fullPage?: boolean, content?: string }> = ({ fullPage = false, content }) => {
    return (
        <div className={`${fullPage && 'full-page-loader'}`}>
            <div className="k-loading-mask">
                <span className="k-loading-text">{content || 'Loading...'}</span>
                <div className="k-loading-image"></div>
            </div>
        </div>
    )
}


export default LoadingComponent
