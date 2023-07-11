import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { applyFilters, getAllSuppliers } from '../../services/redux/actions/actions'
import DropdownMenu from '../../singleComponents/DropdownMenu'

const FilterByGenres = () => {
  const [genreSelected, setGenreSelected] = useState('Genero')
  const dispatch = useDispatch()
  const genreOptions = [
    { name: 'Todos' },
    { name: 'Male' },
    { name: 'Female' }
  ]

  const handlerByGenres = (event) => {
    const { name } = event.target
    setGenreSelected(name)
    dispatch(applyFilters({ filter: 'genre', value: name.toLowerCase() }))
    dispatch(getAllSuppliers())
  }

  return (
    <DropdownMenu
      titleMenu={genreSelected}
      menuItems={genreOptions}
      onClick={handlerByGenres}
    />
  )
}

export default FilterByGenres
