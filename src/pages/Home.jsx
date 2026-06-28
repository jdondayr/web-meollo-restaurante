// Components imports
import Jumbotron from "../components/Jumbotron";

const Home = () => {
    return (
        <>
        <div className="home">
            <Jumbotron />
            <div className="media d-flex gap-2 justify-content-evenly">
                <video src="src/images/video1.mov" autoPlay loop playsInline></video>
                <video src="src/images/video2.mov" autoPlay loop playsInline></video>
                <video src="src/images/video3.mov" autoPlay loop playsInline></video>
                <video src="src/images/video4.mov" autoPlay loop playsInline></video>
            </div>
        </div>
        </>
    )
}

export default Home;