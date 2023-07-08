/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Stack } from '@chakra-ui/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSuppliers } from '../../services/redux/actions/actions';
import { useEffect, useState } from 'react';
import SupplierCard from '../../components/SupplierCard/SupplierCard';
import Paginator from '../Paginator/Paginator';
import FilterByRating from '../Filteres/FilterByRating'

export default function SupplierCardsContainer() {
  //cambios para el paginado
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const suppliers = useSelector(state => state.suppliers);
  console.log(suppliers)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, []);

  // Calcular el índice inicial y final de los elementos a mostrar
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleSuppliers = suppliers.slice(startIndex, endIndex);

  return (
    <Stack mt={12} align='center' justify='center'>
    <FilterByRating />
      <Paginator
        cards={suppliers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Flex
        position='relative'
        align='center'
        justify='center'
        mb='3rem'
        wrap='wrap'
        gap={8}
        px={4}
        py={12}
      >
        {visibleSuppliers ? (
          visibleSuppliers.map(({ id, name, email, image, genre, years_exp, description, categorias, profesiones, rating, ubicacion, phone }) => (
            <SupplierCard
              key={id}
              name={name}
              email={email}
              image={image}
              genre={genre}
              experience={years_exp}
              description={description}
              categorias={categorias}
              profesiones={profesiones}
              rating={rating}
              ubicacion={ubicacion}
              phone={phone}
            />
          ))
        ) : (
          <h2 />
        )}
      </Flex>
    </Stack>
  );
}
