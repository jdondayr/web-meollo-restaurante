// Components imports
import Jumbotron from "../components/Jumbotron";
import Tripadvisor from "../components/Tripadvisor"

const Home = () => {
    return (
        <>
        <div className="home">
            <Jumbotron />
            <div className="media d-flex gap-2 justify-content-evenly">
                <video src="/media/videos/video1.mov" autoPlay loop playsInline></video>
                <video src="/media/videos/video2.mov" autoPlay loop playsInline></video>
                <video src="/media/videos/video3.mov" autoPlay loop playsInline></video>
                <video src="/media/videos/video4.mov" autoPlay loop playsInline></video>
            </div>
            <div className="reviews">
                <Tripadvisor />
            </div>
        </div>
        </>
    )
}

export default Home;