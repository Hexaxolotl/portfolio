
function PhotoControls({ onNextPhoto, onPreviousPhoto, onShowBlackAndWhite, onShowColor, onMoreBlur, onRemoveBlur}) {
    return (
        <p className="hero-buttons">
            <button onClick={onNextPhoto}>Next</button>
            <button onClick={onPreviousPhoto}>Previous</button> 
            <button onClick={onShowBlackAndWhite}>Black and white</button>
            <button onClick={onShowColor}>Clear black and white</button> 
            <button onClick={onMoreBlur}>Make the image Blurry</button> 
            <button onClick={onRemoveBlur}>Remove Blur</button> 
        </p>
    )
}


export default PhotoControls