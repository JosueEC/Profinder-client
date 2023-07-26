/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Flex } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import PostRegister from '../../singleComponents/PostRegister'
import NoResults from '../../../../singleComponents/NoResults'

export default function PostUsersTable ({ posts }) {
  const bgColor = useColorModeValue('gray.100', 'gray.900')

  return (
    <Flex // container principal
      bg={bgColor}
      wrap='wrap'
      p='1rem'
      gap={5}
      w='full'
      alignItems='center'
      justifyContent='center'
    >
      {
        (posts.length !== 0)
          ? (
              posts.map(({ id, title, image, content, softDelete }) => {
                return (
                  <PostRegister
                    key={id}
                    title={title}
                    image={image}
                    content={content}
                    softDelete={softDelete}
                  />
                )
              })
            )
          : (<NoResults />)
      }
    </Flex>
  )
}
