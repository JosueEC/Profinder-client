import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCategories } from '../../services/redux/actions/actions'
import { Box, Divider } from '@chakra-ui/react'
import Footer from '../../components/Footer/Footer'

import TopPro from '../../components/Home/TopPro/TopPro'
import FeaturesGrid from '../../components/Home/FeaturesGrid/FeaturesGrid'
import TestimonialCarrousel from '../../components/Home/TestimonialCarrousel/TestimonialCarrousel'
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks'
import PricingHome from '../../components/Home/PricingHome/PricingHome'
import CategoriesSection from '../../components/Home/CategoriesSection/CategoriesSection'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  return (
    <Box height="100vh">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%" // Ajuste de altura a 50vh
        bgGradient="linear(to-b, #333333, #333333)"
        boxShadow="0 8px 16px rgba(0, 0, 0, 0.2)"
      >
        <HowItWorks />
      </Box>

      <Box bg="gray.900">
        <Divider height="3px" borderColor="gray.300" width="40%" mx="auto" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        bgGradient="linear(to-b, #161c24 , #161c24)"
        boxShadow="0 8px 16px rgba(0, 0, 0, 0.2)"
      >
        <FeaturesGrid />
        <Divider height="3px" borderColor="gray.300" width="40%" mx="auto" />
        <TestimonialCarrousel />
      </Box>

      <Box bg="gray.900">
        <Divider height="3px" borderColor="gray.300" width="40%" mx="auto" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="50vh"
        bgGradient="linear(to-b, #161c24, #161c24)"
        boxShadow="0 8px 16px rgba(0, 0, 0, 0.2)"
      >
        <PricingHome />
      </Box>

      <Box bg="gray.900">
        <Divider height="3px" borderColor="gray.300" width="40%" mx="auto" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        bgGradient="linear(to-b, #161c24, #161c24)"
        boxShadow="0 8px 16px rgba(0, 0, 0, 0.2)"
      >
        <CategoriesSection />
      </Box>

      <Box bg="gray.900">
        <Divider height="3px" borderColor="gray.300" width="40%" mx="auto" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        bgGradient="linear(to-b, #161c24, #161c24)"
        boxShadow="0 8px 16px rgba(0, 0, 0, 0.2)"
      >
        <TopPro />
      </Box>
      <Footer />
    </Box>
  )
}

export default HomePage