/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, lazy, Suspense } from 'react'
import { Flex, Stack } from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSuppliers } from '../../services/redux/actions/actions'
import Paginator from '../Paginator/Paginator'
import FilterByRating from "../Filteres/FilterByRating";
import FilterByGenres from '../Filteres/FilterByGenres'
import { Skeleton } from '@chakra-ui/skeleton'
const SupplierCard = lazy(() => import('../SupplierCard/SupplierCard'))

export default function SupplierCardsContainer () {
  // cambios para el paginado
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10

  const suppliers = useSelector((state) => state.suppliers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllSuppliers())
  }, [])

  // Calcular el índice inicial y final de los elementos a mostrar
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleSuppliers = suppliers.slice(startIndex, endIndex)

  return (
    <Stack mt={12} align='center' justify='center'>
      <FilterByGenres />
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
        {visibleSuppliers
          ? (
              visibleSuppliers.map(
                ({
                  id,
                  name,
                  email,
                  image,
                  ubication,
                  description,
                  professions
                }) => (
                  <Suspense key={id} fallback={<Skeleton height='500px' />}>
                    <SupplierCard
                      key={id}
                      id={id}
                      name={name}
                      email={email}
                      image={image}
                      ubication={ubication}
                      description={description}
                      professions={professions}
                    />
                  </Suspense>
                )
              )
            )
          : (
            <h2 />
            )}
      </Flex>
    </Stack>
  )
}
