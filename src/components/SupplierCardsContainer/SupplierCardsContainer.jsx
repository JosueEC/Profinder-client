import { Flex } from "@chakra-ui/layout";
import SupplierCard from '../../components/SupplierCard/SupplierCard'

export default function SupplierCardsContainer () {
  return (
    <Flex
      position='relative'
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