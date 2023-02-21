import { useParams } from 'react-router-dom';
const Book = () => {
  const params = useParams();
  console.log(params);

  return <h1>{params.nombre}</h1>;
};
export default Book;
