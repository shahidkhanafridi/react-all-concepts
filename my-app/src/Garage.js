export default function Garage(props) {
    const cars = props.cars;
    const rows = [];
    if (props.showCars) {
        cars.forEach((car) => {
            rows.push(<li>{car}</li>)
        })
    }

    return (
        <>
            <h1>Garage</h1>
            {props.showCars ?
                <ul>
                    {rows}
                </ul>
                :
                cars.length > 0 &&
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
            }
        </>
    );
}