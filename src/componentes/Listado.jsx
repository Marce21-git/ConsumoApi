import React, { useState } from 'react'


const Listado = ({dataFilter, setDataFilter }) => {

    const [ordeDesc, setOrdenDesc] = useState('');





    //console.log(dataFilter)
    const bodyTabla = dataFilter.map((meal) => (
        <tr key={meal.idMeal}>
            <td>{meal.strMeal}</td>
            <td>{meal.strCategory}</td>
            <td>{meal.strArea}</td>
        </tr>
    ));

    const ordenando = (a, b) => {
        if (a.strArea.toUpperCase() < b.strArea.toUpperCase()) { return -1 }
        if (a.strArea.toUpperCase() > b.strArea.toUpperCase()) { return 1 }
        return 0
    }

    const ordenarArea = () => {
        const comidasFiltradas = [...dataFilter].sort(
            (a, b) => {

                if(ordeDesc!== false){
                    setOrdenDesc(false)
                    return ordenando(a,b)
                }else{
                    setOrdenDesc(true)
                    return ordenando(b,a)
                }
            }
        );
        setDataFilter(comidasFiltradas)

    }

    return (
        <div className="table-responsive">
            <table className="table table-striped my-4">
                <thead style={{ backgroundColor: "#3282b8"}}>
                    <tr className="table align-middle" style={{ color: "#bbe1fa" }}>
                        <th scope="col">Meal</th>
                        <th scope="col">Category</th>
                        <th scope="col">
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={e => ordenarArea()}
                            >Area</button>


                        </th>
                    </tr>
                </thead>
                <tbody className="table-primary  my-4">
                    {bodyTabla}
                </tbody>
            </table>
        </div>
    )
}



export default Listado