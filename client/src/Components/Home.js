
const Home = () => {
    return (
        <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10" >

            <h2 className="text-3xl font-bold text-center">
                {"Enter Email Address to get Started"}
            </h2>
            <input
                className="text-xl py-2 rounded-full px-4"
                placeholder="Email Address"
                name="email"
                type="text"
                required
            />

            <button
                type="submit"
                className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
            >
                {"Get Started"}
            </button>
        </form>
    );
};

export default Home;
