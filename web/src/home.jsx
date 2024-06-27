import NavigationBar from "./navigationBar";
function Home(){
    return(
        <>
        <NavigationBar/>
        <div className="home-container">
          <h1>Welcome to My Website</h1>
          <h2>Thejandeera Sandeepana</h2>
          {/* Add more content here as needed */}
        </div></>
    );
}
export default Home