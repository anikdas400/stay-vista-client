import Categories from "../../components/rooms/categories/Categories";
import Rooms from "../../components/rooms/Rooms";
import Container from "../../components/shared/Container";


const Home = () => {
    return (
       
            <Container>
            <h2>Well Come to stay vista......</h2>
            {/* category section */}
            <Categories></Categories>
            {/* room section */}
            <Rooms></Rooms>
            </Container>
            
        
    );
};

export default Home;