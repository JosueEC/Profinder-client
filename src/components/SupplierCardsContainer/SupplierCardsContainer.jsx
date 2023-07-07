/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import { Flex } from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSuppliers } from '../../services/redux/actions/actions'
import SupplierCard from '../../components/SupplierCard/SupplierCard'
import { useEffect } from 'react'

export default function SupplierCardsContainer () {
  const suppliers = useSelector(state => state.suppliers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllSuppliers())
  }, [])

  return (
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
              suppliers.map(({ id, name, email, image, genre, years_exp, categorias, profesiones, rating, ubicacion, phone }) => {
                return (
                  <SupplierCard
                    key={id}
                    name={name}
                    email={email}
                    image={image}
                    genre={genre}
                    experience={years_exp}
                    categorias={categorias}
                    profesiones={profesiones}
                    rating={rating}
                    ubicacion={ubicacion}
                  />
                )
              })
            )
          : (
            <h2 />
            )
      }
    </Flex>
  )
}
