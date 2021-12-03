import Anouncement from "../components/Anouncement"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Catelogies from "../components/Catelogies"
import Products from '../components/Products'
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div>
            <Anouncement/>
            <Navbar/>
            <Slider />
            <Catelogies/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
