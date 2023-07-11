export const filterSuppliers = (suppliers, objFilters) => {
  const stateByCategory = filterCategory(suppliers, objFilters)
  const stateByOcupation = filterOcupation(stateByCategory, objFilters)

  return stateByOcupation
}

export const filterOcupation = (suppliers, objFilters) => {
  const newState = new Set()
  suppliers.forEach((supplier) => {
    const card = supplier
    supplier.professions.forEach(({ ocupations }) => {
      ocupations.forEach(({ name }) => {
        if (objFilters.ocupation === '') newState.add(card)
        else if (objFilters.ocupation === name) newState.add(card)
      })
    })
  })
  return [...newState]
}

export const filterCategory = (suppliers, objFilters) => {
  const newState = []
  suppliers.forEach(supplier => {
    const card = supplier
    supplier.professions.forEach(({ category }) => {
      if (objFilters.category === '' || objFilters.category === 'Todas') newState.push(card)
      else if (category === objFilters.category) newState.push(card)
    })
  })
  return newState
}
