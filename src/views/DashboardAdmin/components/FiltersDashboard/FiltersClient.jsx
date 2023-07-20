import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Container, Stack } from '@chakra-ui/layout'
import { useClientDash } from '../../../../services/zustand/useClientDash'
import { CLIENT } from '../../constants'
import DropdownMenu from '../../../../singleComponents/DropdownMenu'

export default function FiltersDashboard () {
  // const {
  //   category,
  //   ocupation,
  //   status,
  //   plan,
  //   results
  // } = useProfesionalDash(state => state.filters)
  const {
    getClients
  } = useClientDash(state => state)

  const statusItems = [
    { name: 'Todos' },
    { name: 'Activo' },
    { name: 'Baneado' }
  ]

  function handleSelectStatus (event) {
    const { name } = event.target
    // applyFilter({ name: 'status', value: name })
    name === 'Activo'
      ? getClients(CLIENT.GET_CLIENTS)
      : (name === 'Baneado')
          ? getClients(CLIENT.GET_CLIENTS)
          : getClients(CLIENT.GET_CLIENTS)
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
        <DropdownMenu
          titleMenu={status}
          menuItems={statusItems}
          onClick={handleSelectStatus}
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
          {/* <Text>
            {`${results} resultados
            ${category === 'Categorias' || category === 'Todas' ? '' : category + '🔹'}
            ${ocupation === 'Ocupacion' || ocupation === '' ? '' : ocupation + '🔹'}
            ${status === 'Estatus' || status === 'Todos' ? '' : status + '🔹'}
            ${plan === 'Plan' || plan === 'Todos' ? '' : plan + '🔹'}`}
          </Text> */}
        </Container>
      </Box>
    </Box>
  )
}
