import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    function navigateHandler () {
        navigate('/products');
    }


    return <>
        <h1>My Home Page</h1>
        <p>
            Go To <Link to='products'>the list of Product.</Link>
        </p>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </> 

}

export default HomePage;


//when we use Anchor tags, and click on them, they send a new HTTP request, and the entire page refresh
//to stop that behaviour, we can use another react router dom component to go from one page to another.
// and that component is LINK.


//Link or NavLink requires a user to click on a link to go to another page BUT 
//there are some times when we want to nevigate a user without them clicking anywhere. like,
//when a timer expires it redirects to another page without having a user to click anywhere.
//For that we can use "useNavigate"