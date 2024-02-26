import { Routes, Route,HashRouter, } from 'react-router-dom';
import './App.css';
import { Title } from './Title';
import { Content } from './Content';
import { Settings } from './Settings';


function Index() {
  return (
    <div className="App">
      <Title />
      <Content />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </HashRouter>
  );
}
