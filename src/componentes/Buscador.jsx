import { useEffect } from "react";

const Buscador = ({ data, datafilter }) => {


    const filtrar = (buscarPalabra) => {
        //console.log('dataB',data)
        const resultado = data.filter((meal) =>
            
            meal.strMeal.toLowerCase().includes(buscarPalabra) || 
            meal.strCategory.toLowerCase().includes(buscarPalabra) ||
            meal.strArea.toLowerCase().includes(buscarPalabra)
        )

        datafilter(resultado)
    }

    const inputHandler = (e) => {
        e.preventDefault();
        const buscarPalabra = e.target.value.toLowerCase();
        filtrar(buscarPalabra)
    }

    useEffect(() => {
        filtrar("")
    },[data]);


    return (
        <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Searching"
            onChange={inputHandler}>
        </input>
    )
};

export default Buscador