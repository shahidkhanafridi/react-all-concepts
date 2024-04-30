function TheCar(props) {
    return <li>I am a { props.brand }</li>;
}

export default function TheGarage() {
    const cars = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <TheCar key={car.id} brand={car.brand} />)}
        </ul>
      </>
    );
  }