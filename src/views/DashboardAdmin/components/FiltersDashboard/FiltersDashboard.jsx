import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Container, Stack, Text } from '@chakra-ui/layout'
import { useProfesionalDash } from '../../../../services/zustand/useProfesionalDash'
import SelectCategories from '../../../../singleComponents/SelectCategories'
import DropdownMenu from '../../../../singleComponents/DropdownMenu'

export default function FiltersDashboard () {
  const {
    category,
    ocupation,
    status,
    plan
  } = useProfesionalDash(state => state.filters)
  const {
    applyFilter,
    getProfesional,
    getBannedProfesional,
    getActiveProfesional,
    getBasicProfesional,
    getPremiumProfesional
  } = useProfesionalDash(state => state)

  const statusItems = [
    { name: 'Todos' },
    { name: 'Activo' },
    { name: 'Baneado' }
  ]

  const planItems = [
    { name: 'Todos' },
    { name: 'Basico' },
    { name: 'Premium' }
  ]

  function handleSelectCategory (value) {
    applyFilter({ name: 'category', value })
    getProfesional()
  }

  function handleSelectOcupation (value) {
    applyFilter({ name: 'ocupation', value })
    getProfesional()
  }

  function handleSelectStatus (event) {
    const { name } = event.target
    applyFilter({ name: 'status', value: name })
    name === 'Activo'
      ? getActiveProfesional()
      : (name === 'Baneado')
          ? getBannedProfesional()
          : getProfesional()
  }

  function handleSelectPlan (event) {
    const { name } = event.target
    applyFilter({ name: 'plan', value: name })
    name === 'Basico'
      ? getBasicProfesional()
      : (name === 'Premium')
          ? getPremiumProfesional()
          : getProfesional()
  }

  return (
    <Box
      bg={useColorModeValue('gray.800', 'gray.800')}
      color={useColorModeValue('gray.50', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW='6xl'
        py={4}
        spacing={4}
        justify='center'
        align='center'
        direction='row'
        wrap='wrap'
      >
        <SelectCategories
          fnSelectCategory={handleSelectCategory}
          fnSelectOcupation={handleSelectOcupation}
          // setCurrentPage={setCurrentPage}
        />
        <DropdownMenu
          titleMenu={status}
          menuItems={statusItems}
          onClick={handleSelectStatus}
        />
        <DropdownMenu
          titleMenu={plan}
          menuItems={planItems}
          onClick={handleSelectPlan}
        />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW='6xl'
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'start', md: 'start', lg: 'start' }}
        >
          <Text>
            {`Resultados para
            ${category === 'Categorias' ? '' : category + '🔹'} 
            ${ocupation === 'Ocupacion' || ocupation === '' ? '' : ocupation + '🔹'}`}
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
