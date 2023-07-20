/* eslint-disable react/prop-types */
import { Avatar } from '@chakra-ui/avatar'
import { ButtonGroup } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, SimpleGrid } from '@chakra-ui/layout'
import ActivePremiumButton from './ActivePremiumButton'
import RemovePremiumButton from './RemovePremiumButton'
import BannedButton from './BannedButton'
import UnbannedButton from './UnbannedButton'

export default function UserRegister ({ id, name, email, image, active, softDelete }) {
  const bg2 = useColorModeValue('white', 'gray.800')

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
        {
        image
          ? <Avatar
              name='Dan Abrahmov'
              src={image ?? null}
            />
          : null
      }

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
            {
              (active === true)
                ? <RemovePremiumButton id={id} />
                : (active === false || active === null)
                    ? <ActivePremiumButton id={id} />
                    : null
            }
            {
              (softDelete === true)
                ? <UnbannedButton id={id} />
                : (softDelete === false || softDelete === null)
                    ? <BannedButton id={id} />
                    : null
            }
          </ButtonGroup>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}
