import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import Appointments from './pages/Appointments/Index';
import Products from './pages/Products/Index';
import Services from './pages/Services/Index';
import Navbar from './components/Navbar/Index';
import Sidebar from './components/Sidebar/Index';

// Componente principal que gerencia layout e rotas
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/agendamentos" element={<Appointments />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/entrar" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// Layout component that checks the current route
function Layout({ children }) {
  const location = useLocation();
  const hiddenRoutes = ['/entrar', '/registrar'];
  const shouldRenderLayout = !hiddenRoutes.includes(location.pathname);

  return (
    <div className="App">
      {shouldRenderLayout && <Navbar />}
      <div className="Layout">
        {shouldRenderLayout && <Sidebar />}
        <div className="MainContent">
          {children}
        </div>
      </div>
    </div>
  );
}










// function Layout({ children }) {
//   const location = useLocation();


// // Routes where Navbar and Sidebar should NOT appear
//   const hiddenRoutes = ['/entrar', '/registrar'];

//   const shouldRenderLayout = !hiddenRoutes.includes(location.pathname);

//   return (
//     <div className="App">
//       {shouldRenderLayout && <Navbar />}
//       <div className="Layout">
//         {shouldRenderLayout && <Sidebar />}
//         <div style={{ flex: 1 }}>{children}</div>
//       </div>
//     </div>
//   );
// }

export default App;
