// Assets 
import './App.css';

// Components
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/pages/Main'
import New from './components/pages/New'

// Libraries / Tools
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <body className="App-body">

        <BrowserRouter>
          <div className="Nav-bar">
            <Link to="/">Main</Link>
            <Link to ="/new">New</Link>
            <Link to ="/blog">Blog</Link>
          </div>
          <Routes>
            <Route index element={<Main />} />
            <Route path="new" element={<New />} />
            <Route path="blog" element={<New />} />
          </Routes>
        </BrowserRouter>
        <div className="App-main">
          <p>Hi</p>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default App;
