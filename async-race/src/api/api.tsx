export async function getCars() {
  try {
    const response = await fetch(
      "http://localhost:3000/garage?_limit=4"
    );
    setCars(await response.json());
    if (response.headers) {
      setCount("4");
    }
  } catch (error) {
    alert(error);
  }
}

export async function getCar() {
  try {
    const response = await fetch(
      "http://localhost:3000/garage/5"
    );
    const newCar = await response.json();
    setCars([...cars, newCar]);
    if (response.headers) {
      setCount((cars.length + 1).toString());
    }
  } catch (error) {
    alert(error);
  }
}
