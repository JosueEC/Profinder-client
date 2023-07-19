/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button, ButtonGroup, IconButton } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, SimpleGrid, Stack } from '@chakra-ui/layout'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Avatar } from '@chakra-ui/avatar'
import { useProfesionalDash } from '../../../../services/zustand/useProfesionalDash'
import { useEffect } from 'react'
import FiltersPanel from '../../../../components/FiltersPanel/FiltersPanel'

export default function UsersTable () {
  const profesional = useProfesionalDash(state => state.profesional)
  const getProfesional = useProfesionalDash(state => state.getProfesional)

  const bg = useColorModeValue('white', 'gray.800')
  const bg2 = useColorModeValue('white', 'gray.800')
  const bg3 = useColorModeValue('gray.100', 'gray.700')

  useEffect(() => {
    getProfesional()
  }, [])

  return (
    <Flex // Container tabla
      w='full'
      p={50}
      alignItems='center'
      justifyContent='center'
    >
      {
        (profesional)
          ? (
            <Stack // Tabla
              direction={{
                base: 'column'
              }}
              w='full'
              bg={{
                md: bg
              }}
              shadow='lg'
            >
              <FiltersPanel />
              <SimpleGrid // Encabezado tabla
          // border='solid 2px red'
                spacingY={3}
                columns={{
                  base: 1,
                  md: 4
                }}
                w={{
                  base: 120,
                  md: 'full'
                }}
                textTransform='uppercase'
                bg={bg3}
                color='gray.300'
                py={{
                  base: 1,
                  md: 4
                }}
                px={{
                  base: 2,
                  md: 10
                }}
                visibility={{
                  base: 'hidden',
                  md: 'visible'
                }}
                fontSize='md'
              >
                <span>Foto</span>
                <span>Nombre</span>
                <span>correo electronico</span>
                <span>acciones</span>
              </SimpleGrid>
              {profesional.map(({ id, name, email }) => {
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
                      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
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
                            View Profile
                          </Button>
                          <IconButton
                            colorScheme='green'
                            icon={<CheckIcon />}
                            aria-label='Edit'
                          />
                          <IconButton
                            colorScheme='red'
                            variant='outline'
                            icon={<CloseIcon />}
                            aria-label='Delete'
                          />
                        </ButtonGroup>
                      </Flex>
                    </SimpleGrid>
                  </Flex>
                )
              })}
            </Stack>)
          : (<h2>Cargando...</h2>)
      }
    </Flex>
  )
}
