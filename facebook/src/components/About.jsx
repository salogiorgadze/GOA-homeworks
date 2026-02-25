function About(props){

    const styles = {
        color : props.color,
        backgroundColor : props.backgroundColor,
        imgSrc : props.imgSrc
    }
    return(
        <div style={styles}>
            <h2>About Us</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam magni quo impedit animi qui alias repudiandae nobis nesciunt ducimus! Vitae, a adipisci sit laborum placeat praesentium iure inventore assumenda?</p><hr/>
            <img src={styles.imgSrc} alt="" width={300}/>
        </div>
    )
}
export default About

