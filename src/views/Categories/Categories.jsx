import { Heading } from '@chakra-ui/layout'
import styles from './Categories.module.css'
import SupplierCardsContainer from '../../components/SupplierCardsContainer/SupplierCardsContainer'
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel'


import { useEffect, useState, lazy, Suspense } from 'react'
import { Flex, Stack } from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSuppliers } from '../../services/redux/actions/actions'
import { Skeleton } from '@chakra-ui/skeleton'


import Paginator from './../../components/Paginator/Paginator';



const Categories = () => {
  //! cambios para el paginado
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10
  // const [searchTerm, setSearchTerm] = useState("");
  
  const suppliers = useSelector((state) => state.suppliers)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllSuppliers())
  }, [])
  
  //! Calcular el índice inicial y final de los elementos a mostrar
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleSuppliers = suppliers.slice(startIndex, endIndex)
  return (
    <div className={styles.categoryContainer}>
      <Heading
        className={styles.categoryh2}
        fontSize='4xl'
        bgGradient='linear(to-l, teal.300, green.400)' bgClip='text'
      >
        PROFESIONALES
      </Heading>
      <FiltersPanel  setCurrentPage={setCurrentPage}/>
      <Paginator
        cards={suppliers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        
      />
      <SupplierCardsContainer  cards={suppliers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        visibleSuppliers={visibleSuppliers}/>

    </div>
  )
}

export default Categories
