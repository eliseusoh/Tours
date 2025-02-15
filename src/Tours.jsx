import SingleTour from './SingleTour';


const Tours = ({tours, removeTour}) =>{

    return <section>
        <div className ='title'>
            <h2>Our Tours</h2>
            <div className ='title-underline'></div>
        </div>

        <div className='tours'>
            {tours.map((tour)=>{
            return <SingleTour key={tour.id} {...tour} removeTour = {removeTour}/>;
            })}
        </div>
    </section>
};

export default Tours;