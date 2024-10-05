import './Home.css'
import HomeScreenOne from '../../assets/home_images/browser.png'
import HomeScreenTwo from '../../assets/home_images/browser.png'
const Home = () => {
    return (
        <div >
            <div className="container heading_one">
                <h2 className='heading_two'>
                    Environmental science for a world where people and
                    nature prosper
                </h2>
                <h5 className='heading_three'>Eliminate manual tasks and optimize the processes with our workflow
                    automation solution. <br></br>Save time, reduce errors, and improve efficiency</h5>
                <button type="button" className="btn btn-primary button_one">Get Started</button>
                <img src={HomeScreenOne} className='image_one' alt="Logo" />
            </div>
            <section>
                <div >
                    <div className='section_two'>
                        <div className='container'>
                        <h2 className='heading_four'>OceoHex One, the advanced Costal Pollution Monitoring System</h2>
                        <img src={HomeScreenTwo} className='image_two' alt="Logo" />
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
