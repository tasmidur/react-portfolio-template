import {Container} from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import {BasicInfoShema} from "./data/BasicInfoShema";
import Projects from "./pages/Projects";



const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Home BasicInfo={BasicInfoShema}/>} exact/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact contact={BasicInfoShema.contact}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
