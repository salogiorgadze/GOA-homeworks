function Box(){
    function randomColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`;
    }
    const box = {
        width : "400px",
        height : "500px",
        backgroundColor : randomColor(),

    }
    return (
        <div style={box}></div>
    )
}
export default Box