import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { applyFilters, getAllSuppliers } from '../../services/redux/actions/actions'
import DropdownMenu from '../../singleComponents/DropdownMenu'

const FilterByRating = () => {
  const [ratingSelected, setRatingSelected] = useState('Rating')
  const dispatch = useDispatch()
  const ratingOptions = [
    { name: 'Aleatorio' },
    { name: 'Mejor valoracion' },
    { name: 'Menor valoracion' }
  ]

  function handleSelectRating (event) {
    const { name } = event.target
    setRatingSelected(name)
    dispatch(applyFilters({ filter: 'rating', value: name }))
    dispatch(getAllSuppliers())
  }

  return (
    <DropdownMenu
      titleMenu={ratingSelected}
      menuItems={ratingOptions}
      onClick={handleSelectRating}
    />
  )
}

export default FilterByRating
