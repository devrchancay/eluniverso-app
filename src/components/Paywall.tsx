import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Box from "./Box";
import Typography from "./Typography";

const PayWall = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["13%", "70%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <Box px={4}>
        <Box>
          <Typography fontSize={5} fontFamily="bold" color="#0374bb">
            Contenido exclusivo para suscriptores
          </Typography>
          <Typography fontSize={3} fontFamily={"regular"}>
            Suscríbete para seguir leyendo
          </Typography>
        </Box>
        <Box borderTopWidth={1} borderColor="#C4C4C4" my={4} />
        <Box px={1} justifyContent={"center"}>
          <Box bg="#0374bb" width="100%" py={4} mt={3} borderRadius={2}>
            <Typography
              fontFamily="regular"
              textAlign="center"
              color="white"
              fontSize={5}
            >
              Plan Digital mensual
            </Typography>
            <Box py={3}>
              <Typography
                fontFamily="bold"
                textAlign="center"
                color="white"
                fontSize={7}
              >
                $1.00
              </Typography>
            </Box>
            <Box>
              <Typography
                fontFamily="regular"
                textAlign="center"
                color="white"
                fontSize={3}
              >
                Paga $1.00 por los primeros 3 meses y $5.00 a partir del cuarto
                mes
              </Typography>
            </Box>
          </Box>
          <Box
            borderColor="#0374bb"
            borderWidth={1}
            width="100%"
            py={4}
            mt={3}
            borderRadius={2}
          >
            <Typography fontFamily="regular" textAlign="center" fontSize={5}>
              Plan Digital anual
            </Typography>
            <Box py={3}>
              <Typography fontFamily="bold" textAlign="center" fontSize={7}>
                $45.00
              </Typography>
            </Box>
            <Box>
              <Typography fontFamily="regular" textAlign="center" fontSize={3}>
                Paga el año por adelantado y ahorra $15.00 del valor anual del
                Plan Digital Mensual
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box borderTopWidth={1} borderColor="#C4C4C4" my={4} />
        <Box>
          <Box py={2}>
            <Typography fontFamily="regular" textAlign="center" fontSize={3}>
              Ya tengo una cuenta
            </Typography>
            <Typography
              color="#0374bb"
              fontFamily="bold"
              textAlign="center"
              fontSize={3}
            >
              Ingresa aquí
            </Typography>
          </Box>
          <Box py={2}>
            <Typography fontFamily="regular" textAlign="center" fontSize={3}>
              Soy suscriptor del diario
            </Typography>
            <Typography
              color="#0374bb"
              fontFamily="bold"
              textAlign="center"
              fontSize={3}
            >
              Activar mi acceso digital
            </Typography>
          </Box>
        </Box>
      </Box>
    </BottomSheet>
  );
};

export default PayWall;
