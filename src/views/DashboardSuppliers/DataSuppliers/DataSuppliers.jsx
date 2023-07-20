import { Doughnut } from "react-chartjs-2";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfesionals } from "../../../services/redux/actions/actions";
import { Box,Flex } from "@chakra-ui/react"; 


const DataSuppliers = () => {
  const dataSuppliers = useSelector((state) => state.profesionales);
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  const profile = dataSuppliers.find((user) => user.id === userSession.id);
  //console.log(profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfesionals());
  }, []);

  // hay que validar que exista la propiedad porque si no sale undefined, validar con todos los campos
  const numPosts = profile && profile.posts ? profile.posts.length : 0;

  // const serviciosActivos = profile && profile.servicios_activos ? profile.servicios_activos : 0;
  const serviciosActivos = 20;
  const serviciosTerminados = 15;
  const serviciosCancelados = 2;
  // aca van los datos de la gráfica
  const chartData = {
    labels: [
      "Posts",
      "Servicios Activos",
      "Servicios Terminados",
      "servicios Cancelados",
    ],
    datasets: [
      {
        data: [
          numPosts,
          serviciosActivos,
          serviciosTerminados,
          serviciosCancelados,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(192, 75, 75, 0.6)",
          "rgba(3, 75, 75, 0.6)",
          "rgba(200, 200, 20, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configurar las opciones de la gráfica
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    cutout: "50%", 
  };

  return (
    <Flex justifyContent="flex-end" alignItems="flex-start">
    <Box width="600px" height="600px">
   
        <Doughnut data={chartData} options={chartOptions} />
  
    </Box>
  </Flex>
  );
};

export default DataSuppliers;
