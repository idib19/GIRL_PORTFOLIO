import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import ListReviews from './components/ListReviews';
import Projet1 from './components/Projet1';
import Projet2 from './components/Projet2';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';


export default function App() {
  return (

    <>
      <Layout>

        <div class="mx-4 mt-8 sm:mt-0 text-center flex items-center justify-center">

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projet1' element={<Projet1 />} />
            <Route path='/projet2' element={<Projet2 />} />
            {['/reviews'].map(path => <Route path={path} key={path} element={<ListReviews />} />)}

          </Routes>

        </div>

      </Layout>

    </>
  )
}
