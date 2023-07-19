import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Container, Stack, Text } from "@chakra-ui/layout";
import { useProfesionalDash } from "../../../../services/zustand/useProfesionalDash";
import SelectCategories from "../../../../singleComponents/SelectCategories";

export default function FiltersDashboard () {
  const applyFilter = useProfesionalDash(state => state.applyFilter)
  const { category, ocupation } = useProfesionalDash(state => state.filters)

  function handleSelectCategory (value) {
    applyFilter({ name: 'category', value})
  }

  function handleSelectOcupation (value) {
    applyFilter({ name: 'ocupation', value})
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
            ${category === 'Categoria' ? '' : category + '🔹'} 
            ${ocupation === 'Ocupacion' || ocupation === '' ? '' : ocupation + '🔹'}`}
          </Text>
        </Container>
      </Box>
    </Box>
  )
}