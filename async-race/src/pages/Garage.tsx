import React, { FC, useState, useEffect } from "react";
import { Track } from "../components/track/Track";
import { Settings } from "../components/settings/Settings";
import { RenderCar } from "../utils/RenderCar";

interface ICarsProps {
  items: ICar[];
}

interface ICar {
  name: string;
  color: string;
  id: number;
}


export const Garage: FC<ICarsProps> = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [count, setCount] = useState<string>("");

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
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

  async function getCar() {
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

  async function deleteCar() {
    try {
      const response = await fetch(
        "http://localhost:3000/garage/5"
      );
      const newCar = await response.json();
      setCars(cars.filter(item => item !== newCar));
      if (response.headers) {
        setCount((cars.length + 1).toString());
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Settings />
      <h1>Garage {count} cars</h1>
      <h2>Page 1</h2>
      <button onClick={getCar}>Click</button>
      <button onClick={RenderCar}>Color</button>
      {cars.map((car) => (
        <Track key={car.id} cars={cars} fill={car.color} />
      ))}
    </div>
  );
};