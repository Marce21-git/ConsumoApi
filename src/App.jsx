import './App.css'
import './login.css'
import Listado from './componentes/Listado';
import { useEffect, useState } from 'react';
import Buscador from './componentes/Buscador';
import MiApi from './componentes/MiApi';

function App() {

  const [data, setData] = useState([])
  const [dataFilter, setDataFilter] = useState(data)


  useEffect(() => {
    MiApi(data, setData, setDataFilter)
  }, [])


  return (
    <>
      <p className="h1">The Best Chicken Meals</p>
      <div className="container text-center my-3 px-0">
        <div className="row">
          <div className="col">
            <img src="https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
              className="rounded img-fluid" alt="..."></img>
          </div>
          <div className="col">
            <img src="https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg"
              className="rounded img-fluid" alt="..."></img>
          </div>
          <div className="col">
            <img src="https://www.themealdb.com/images/media/meals/1525872624.jpg"
              className="rounded img-fluid" alt="..."></img>
          </div>
        </div>
      </div>
      <Buscador data={data} datafilter={setDataFilter} />
      <Listado
        data={data}
      
        setDataFilter={setDataFilter} />
      <div className="container" style={{ color: "#bbe1fa" }}>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Consultora Valenzuela ltda.</span>
          </div>

        </footer>
      </div>
    </>
  )
}
export default App;
