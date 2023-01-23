import React, { FC, useState, useEffect } from "react";
import { Track } from "../components/track/Track";
import { Settings } from "../components/settings/Settings";
import { ICarsProps, ICar } from "../types/interface";
import "./Garage.css";
// import { useSettingsCarsContext } from "../context/context";

export const Garage: FC<ICarsProps> = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [count, setCount] = useState<string>("");
  const [id, setId] = useState<number>(5);

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    try {
      const response = await fetch(
        "http://localhost:3000/garage?_limit=4"
      );
      setCars(await response.json());
      console.log(cars);
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
        `http://localhost:3000/garage/${id}`
      );
      const newCar = await response.json();
      setCars([...cars, newCar]);
      console.log(cars[1]);
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

  // const { colorValue, setColorValue } = useSettingsCarsContext();

  const getRandomCarsColors = (): string => {
    const randomColor = '#' + (Math.random().toString(16)).substring(2, 8);
    const randomColorArray: string[] = [];
    randomColorArray.push(randomColor);
    return randomColorArray[randomColorArray.length - 1];
  };


  const randomCarNameArray: string[] = [];

  const randomNumber = (): number => {
    return Math.floor(Math.random() * 10);
  };

  const getRandomCarsName = (): string => {
    const auto = ["Audi", "BMW", "Ford", "Tesla", "Mersedes", "Honda", "Kia", "Lada", "Hyundai", "Mazda"];
    const model = ["Model S", "Mustang", "A8", "Gran Coupe", "CR-V", "Rio", "Vesta", "M2", "Transit", "CLS"];

    const randomCarName = `${auto[randomNumber()]} ${model[randomNumber()]}`;
    randomCarNameArray.push(randomCarName);
    console.log(randomCarNameArray);
    return randomCarNameArray[randomCarNameArray.length - 1];
  };

  return (
    <div>
      <Settings />
      <div className="btns">
        <button className="button" onClick={getCar}>Create</button>
        <button className="button" onClick={getCar}>Create 100</button>
      </div>
      <h1>Garage {count} cars</h1>
      <h4>Page 1</h4>
      {cars.map((car) => (
        <Track key={car.id} items={cars} fill={car.color ? car.color : getRandomCarsColors()} title={car.name ? car.name : getRandomCarsName()} />
      ))}
    </div>
  );
};