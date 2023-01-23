export interface ICarsProps {
  items: ICar[];
  fill: string;
  title: string;
}

export interface ICar {
  name: string;
  color: string;
  id: number;
}