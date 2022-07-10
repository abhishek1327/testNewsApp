
import './App.css';
import NewsCard from './Components/NewsCard';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <NewsCard 
      tittle=""
      imageUrl=""
      body="">

      </NewsCard>
      <Footer/>
    </div>
    </>
  );
}

export default App;
