import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const Home = () => {
  const data = useLoaderData();

  const [coffees, setCoffees] = useState(data);

  return (
    <div className="mx-auto container">
      <h1 className="text-center font-bold text-4xl my-6">
        Chooose Your Coffee
      </h1>
      <section className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </section>
    </div>
  );
};

export default Home;
