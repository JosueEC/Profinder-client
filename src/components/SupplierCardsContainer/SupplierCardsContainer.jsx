/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Stack } from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSuppliers } from '../../services/redux/actions/actions'
import { useEffect } from 'react'
import SupplierCard from '../../components/SupplierCard/SupplierCard'
import Paginator from '../Paginator/Paginator'

export default function SupplierCardsContainer () {
  const suppliers = useSelector(state => state.suppliers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllSuppliers())
  }, [])

  return (
    <Stack
      mt={12}
      align='center'
      justify='center'>
    <Paginator cards={suppliers}/>
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
      {
        (suppliers)
          ? (
              suppliers.map(({ id, name, email, image, genre, years_exp, description, categorias, profesiones, rating, ubicacion, phone }) => {
                return (
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
                )
              })
            )
          : (
            <h2 />
            )
      }
    </Flex>
    </Stack>
  )
}
