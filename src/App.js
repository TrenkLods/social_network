
import s from './App.module.css';
import Footer from '../src/component/footer/Footer'
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import ContentComponents from './component/content/ContentComponents';

function App() {
  return (
    <div className={s.App}>
      
        
          <Header />
          <Navbar />
          <ContentComponents />
          <Footer />
        
      
    </div>
  );
}

export default App;
