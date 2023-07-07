import { Flex } from "@chakra-ui/layout";
import SupplierCard from '../../components/SupplierCard/SupplierCard'
import { useColorModeValue } from "@chakra-ui/color-mode";

export default function SupplierCardsContainer () {
  return (
    <Flex
      position='relative'
      bg={useColorModeValue('gray.900', 'gray.800')}
      align='center'
      justify='center'
      mb='3rem'
      wrap='wrap'
      gap={8}
      px={4}
      py={12}>
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
      <SupplierCard />
    </Flex>
  )
}