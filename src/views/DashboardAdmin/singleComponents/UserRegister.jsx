/* eslint-disable react/prop-types */
import { Avatar } from '@chakra-ui/avatar'
import { Button, ButtonGroup } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, SimpleGrid } from '@chakra-ui/layout'
import { useProfesionalDash } from '../../../services/zustand/useProfesionalDash'

export default function UserRegister ({ id, name, email, image }) {
  const bg2 = useColorModeValue('white', 'gray.800')
  const {
    postBannedProfesional,
    getActiveProfesional
  } = useProfesionalDash(state => state)

  function handleBannedAction () {
    postBannedProfesional(id)
    getActiveProfesional()
  }

  return (
    <Flex // Elemento tabla
      direction={{
        base: 'row',
        md: 'column'
      }}
      bg={bg2}
      key={id}
    >
      <SimpleGrid // Renglon tabla
        spacingY={3}
        columns={{
          base: 1,
          md: 4
        }}
        w='full'
        py={2}
        px={10}
      >
        <Avatar name='Dan Abrahmov' src={image} />
        <span>{name}</span>
        <Flex>
          {email}
        </Flex>
        <Flex
          justify={{
            md: 'end'
          }}
        >
          <ButtonGroup variant='solid' size='sm' spacing={3}>
            <Button
              size='sm'
              variant='solid'
              colorScheme='purple'
            >
              Ver perfil
            </Button>
            <Button
              colorScheme='green'
            >
              Activar
            </Button>
            <Button
              onClick={handleBannedAction}
              colorScheme='red'
            >
              Banear
            </Button>
          </ButtonGroup>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}
