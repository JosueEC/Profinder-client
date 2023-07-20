/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/button'
import { useToast } from '@chakra-ui/toast'
import { useProfesionalDash } from '../../../services/zustand/useProfesionalDash'

export default function ActivePremiumButton ({ id }) {
  const toast = useToast()
  const {
    postPremiumProfesional,
    getProfesional
  } = useProfesionalDash()

  async function handleActivePremium () {
    await postPremiumProfesional(id)
    await getProfesional()
    toast({
      title: 'Premium Activado',
      description: 'La cuenta ahora tiene plan premium',
      status: 'success',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true
    })
  }

  return (
    <Button
      size='sm'
      variant='solid'
      colorScheme='yellow'
      onClick={handleActivePremium}
    >
      Activar Premium
    </Button>
  )
}
