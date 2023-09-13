import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { BackBtn } from "../components/BackBtn";
//import { addProductToCart } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";

export const FormationDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const dispatch = useDispatch();

  const addFormation = () => {
      dispatch(addFormationToCart(formation))
  }
  // recuperation de l'url
  const param = useParams();
  //console.log(param);
  const API_URL = `http://localhost:3000/Formation`;

  // fetch api
  const fetchFormation = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(API_URL);
      setFormation(data[0]);
    } catch (error) {
      setError(error.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFormation();
  }, []);

  /* ERROR */
  if (error) {
    return (
      <p className="text-red-700 text-xl my-3 font-bold">Erreur : {error}</p>
    );
  }

  /* CHARGEMENT */
  if (loading) {
    return <p>Chargement en cours.....</p>;
  }

  return (
    <>
    {
      product &&
   <main className='container mx-auto'>
    <BackBtn />
      <div className="flex">
        <div className="w-1/2">
          <img src={formation.image} alt={formation.title} />
        </div>
        <div className="w-1/2 pl-10 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-5">{formation.title}</h2>
            <div className="mb-3">
              <p className="mb-3 font-bold text-xl">Description: </p>
              <p>{formation.description}</p>
            </div>

            <div className="mb-3">
              <p className="mb-3 font-bold text-xl">Catégorie: </p>
              <p>{formation.category}</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-6xl font-bold">
              {formation.price} <span className="text-pink-700">$</span>
            </p>
            <button
            onClick={addProduct}
              className="py-2 px-6 bg-pink-700 text-pink-50 shadow-sm shadow-black hover:bg-pink-300 hover:text-gray-900"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </main>  
    }
        </>
    
  );
};