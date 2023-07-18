/* eslint-disable react/prop-types */
// import {
//   IconButton,
//   Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   useDisclosure
// } from '@chakra-ui/react'
// import { HamburgerIcon } from '@chakra-ui/icons'

// export default function Sidebar ({ children }) {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <Box
//       minH='100vh'
//       bg={useColorModeValue('gray.100', 'gray.900')}
//     >
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: 'none', md: 'block' }}
//       />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement='left'
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size='xs'
//       >
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} p='4'>
//         {children}
//       </Box>
//     </Box>
//   )
// }

// const NavItem = ({ icon, children, ...rest }) => {
//   return (
//     <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align='center'
//         p='4'
//         mx='4'
//         borderRadius='lg'
//         role='group'
//         cursor='pointer'
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white'
//         }}
//         {...rest}
//       >
//         {icon && (
//           <Icon
//             mr='4'
//             fontSize='16'
//             _groupHover={{
//               color: 'white'
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   )
// }

// const MobileNav = ({ onOpen, ...rest }) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height='20'
//       alignItems='center'
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth='1px'
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent='flex-start'
//       {...rest}
//     >
//       <IconButton
//         variant='outline'
//         onClick={onOpen}
//         aria-label='open menu'
//         icon={<HamburgerIcon />}
//       />

//       <Text fontSize='2xl' ml='8' fontFamily='monospace' fontWeight='bold'>
//         Logo
//       </Text>
//     </Flex>
//   )
// }
