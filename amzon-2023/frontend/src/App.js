import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Allroutes from './AllRoutes/Allroutes';

function App() {
  return (
    <div className="App">
       <Navbar/>
        <Allroutes/>
      <Footer/>
        </div>
  );
}

export default App;

 /* <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/signup" element={<h1>signup</h1>}/>
         <Route path="/login" element={<Login/>}/>
        </Routes>  */