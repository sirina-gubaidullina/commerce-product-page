import { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import SneakerItem from "./SneakerItem";
import classes from "./Sneakers.module.css";
import Load from "../UI/Load";

const FIREBASE_DOMAIN = "https://my-dummy-firebase-domain";

const Sneakers = () => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchSneakers = async () => {
      const response = await fetch(`${FIREBASE_DOMAIN}/sneakers.json`);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedSneakers = [];

      for (const key in responseData) {
        loadedSneakers.push({
          id: key,
          brand: responseData[key].brand,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          oldPrice: responseData[key].oldPrice,
          sale: responseData[key].sale,
        });
      }
      setSneakers(loadedSneakers);
      setIsLoading(false);
    };

    fetchSneakers().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <Load />
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2>{error}</h2>
      </section>
    );
  }

  const sneakersList = sneakers.map((sneakers) => (
    <SneakerItem
      key={sneakers.id}
      id={sneakers.id}
      brand={sneakers.brand}
      name={sneakers.name}
      description={sneakers.description}
      price={sneakers.price}
      oldPrice={sneakers.oldPrice}
      sale={sneakers.sale}
    />
  ));

  return (
    <section className={classes}>
      <Gallery />
      {sneakersList}
    </section>
  );
};
export default Sneakers;
