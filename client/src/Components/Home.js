import './Home.css'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="home">
            <form className="bg-light d-flex flex-column justify-content-between p-2 w-50 mx-auto">
                <h2 className="p-2">
                    Enter Email address to get started
                </h2>
                <input
                    className="p-2"
                    placeholder="Email Address"
                    name="email"
                    type="text"
                    required
                />

                <button
                    type="submit"
                    className="p-2 m-5"
                    onClick={()=>{navigate('/navigatePath')}}
                >
                    {"Get Started"}
                </button>
            </form>
        </div>
    );
};

export default Home;
