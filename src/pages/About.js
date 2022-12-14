import Myimage from './images/myImage.JPG'

function About() {
    return (
        <section className="about flex-container">
            <h2 className="about-header">About Me.</h2>
            <div className="about-container">
                <p className="about-me ">
                    I am a Full Stack Developer with a background in Electronics and Communication.I pursued my an MFA degree from California Institute of Arts and graduated in 2022.
                    I also completed a Music Production Certification from Icon Collective, Los Angeles. I took a small web design course from Udemy and decided that this is something i enjoy doing a lot.
                    I was able to join the UCLA Extension program which develop skills with various web technologies like HTML, CSS, JavaScript, REACT, Express, SQL etc. 

                </p>
                <div className="myimage" >
                <img src={Myimage} alt="No image" style={{ width: '300px'}}/>
            </div>
                
            </div>

            

        </section>
    );
}

export default About;