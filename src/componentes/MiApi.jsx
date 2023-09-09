

const MiApi = (data, setData, setDataFilter) => {

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        .then((response) => {
            return response.json()
        })
        .then((comidas) => {
            const meals = comidas.meals.map(meal => {
                const { idMeal, strMeal, strCategory, strArea } = meal;
                return { idMeal, strMeal, strCategory, strArea };

            })
            setData(meals)
            setDataFilter(data)

        })
}

export default MiApi