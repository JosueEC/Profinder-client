import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfesionals } from "../../../services/redux/actions/actions";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import { useSessionState } from "../../../services/zustand/useSession";
import { Alert, AlertIcon } from "@chakra-ui/react";

//!cambios pasarela

const DataSuppliers = () => {
  const dataSuppliers = useSelector((state) => state.profesionales);
 
  const session = useSessionState((state) => state.session);

  const profile = dataSuppliers.find((user) => user.id === session.id);


  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    dispatch(getProfesionals());
  }, [dispatch]);

  useEffect(() => {

    const currentUrl = window.location.href;

    const urlParams = new URLSearchParams(currentUrl);

    // Obtén los datos que necesitas
    const collectionStatus = urlParams.get("collection_status");
    const preferenceId = urlParams.get("preference_id");

    // Aquí puedes utilizar la información como desees
    console.log("collectionStatus:", collectionStatus);
    console.log("preferenceId:", preferenceId);

    // Verifica si collectionStatus es "approved"
    if (collectionStatus === "approved") {
      // Enviar los datos al backend en un JSON mediante una solicitud POST
      setShowAlert(true);
      axios
        .post("https://backprofinder-production.up.railway.app/premium", {
          collectionStatus: collectionStatus,
          preferenceId: preferenceId,
        })
        .then((response) => {
          console.log("Respuesta del backend:", response.data);
          // Aquí puedes manejar la respuesta del backend, si es necesario
          window.location.href =
            "https://profinder-client.vercel.app/dashboardSuppliers";
        })
        .catch((error) => {
          console.error("Error al enviar datos al backend:", error);
          // Aquí puedes manejar errores en caso de que ocurran
        });
    }
  }, []);


  // hay que validar que exista la propiedad si no sale undefined
  const numPosts = profile && profile.posts ? profile.posts.length : 0;

  const serviciosActivos = 20;
  const serviciosTerminados = 15;
  // aca van los datos de la gráfica
  const chartData = {
    labels: [
      "Posts",
      "Mi Calificacion",
      "Feedback Recibido",
      
    ],
    datasets: [
      {
        data: [
          numPosts,
          serviciosActivos,
          serviciosTerminados,
        ],
        backgroundColor: [
          "rgba(220, 30, 220, 0.6)",
          "rgba(192, 75, 75, 0.6)",
          "rgba(3, 75, 75, 0.6)",
      
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

  //

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    dispatch(getProfesionals());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const chartWidth = windowWidth > 600 ? 600 : windowWidth - 20;
  const chartHeight = chartWidth;
  return (
    <Flex justifyContent="center" alignItems="center">
      <Alert status="success" display={showAlert ? "flex" : "none"} mb={4}>
      <AlertIcon />
      ¡Eres premium!
    </Alert>
      <Box width={`${chartWidth}px`} height={`${chartHeight}px`}>
        {" "}
        <Doughnut data={chartData} options={chartOptions} />
      </Box>
    </Flex>
  );
};

export default DataSuppliers;
