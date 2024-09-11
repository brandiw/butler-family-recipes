// Assets 
import './App.css';

// Components
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/pages/Main'
import New from './components/pages/New'

// Libraries / Tools
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <body className="App-body">
        <p>Hi</p>
        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} />
            <Route path="new" element={<New />} />
          </Routes>
        </BrowserRouter>
      </body>
      <Footer />
    </div>
  );
}

export default App;
