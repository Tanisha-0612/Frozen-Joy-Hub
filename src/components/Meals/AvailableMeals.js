import { useEffect ,useState} from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


  const AvailableMeals = () =>{

    const [frozenMeals,setFrozenMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(()=>{

      const fetchFrozenMeals = async () =>{
    
        const response = await fetch('https://ice-cream-store-d7db6-default-rtdb.asia-southeast1.firebasedatabase.app/frozenMeals.json');

        if(!response.ok){
          throw new Error('something went wrong');
        }
        const responseData = await response.json();

        const loadedFrozenMeals = [];
        for(const key in responseData){
          loadedFrozenMeals.push({
            id : key,
            name : responseData[key].name,
            description : responseData[key].description,
            price : responseData[key].price
          });
        }
        setFrozenMeals(loadedFrozenMeals);
        setIsLoading(false);
      };

      
        fetchFrozenMeals().catch(error =>{
          setIsLoading(false);
          setHttpError(error.message);
        });
    },[]);

    if(isLoading){
      return (
        <section className={classes.MealsLoading}>
          <p>Loading...</p>
        </section>
      )
    }

    if(httpError){
      return (
        <section className={classes.MealsError}>
          <p>{httpError}</p>
        </section>
      )
    }
  
    const mealsList = frozenMeals.map((meal) => (
       <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
       />
    ))
    return (
        <section className={classes.meals}>
          <Card>
          <ul>{mealsList}</ul>
          </Card>
           
        </section>
    )

  }

  export default AvailableMeals;