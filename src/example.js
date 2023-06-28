// {
//   readings.length > 0 && (
//     <div className="mobile">
//       <VStack>
//         {readings.map((reading) => {
//           return (
//             <>
//               <HStack spacing="20px" className="mb-2">
//                 <Box className="date" borderRadius="5px" border="solid">
//                   {format(reading.date, "dd/MM/yyyy")}
//                 </Box>
//                 <Box className="time" borderRadius="5px" border="solid">
//                   {format(reading.date, "h:mm aa")}
//                 </Box>
//               </HStack>
//               <HStack spacing="20px" className="mb-2">
//                 <Box
//                   className="systolic-data"
//                   borderRadius="5px"
//                   border="solid"
//                 >
//                   {reading.systolic}
//                 </Box>
//                 <span>/</span>
//                 <Box
//                   className="diastolic-data"
//                   borderRadius="5px"
//                   border="solid"
//                 >
//                   {reading.diastolic}
//                 </Box>
//                 <Box className="pulse-data" borderRadius="5px" border="solid">
//                   {reading.pulse}
//                 </Box>
//               </HStack>
//               <Box className="checkbox">
//                 {reading.irregularBeats ? "yes" : "no"}
//               </Box>

//               <Textarea
//                 value={reading.notes}
//                 placeholder="Note..."
//                 className="note-box"
//                 borderRadius="5px"
//                 border="solid"
//                 resize="none"
//                 isReadOnly
//               />
//             </>
//           );
//         })}
//       </VStack>
//     </div>
//   );
// }

// <div className="mobile">
//   <VStack>
//     <HStack spacing="20px" className="mb-2">
//       <Box className="date" borderRadius="5px" border="solid">
//         Date
//       </Box>
//       <Box className="time" borderRadius="5px" border="solid">
//         Time
//       </Box>
//     </HStack>
//     <HStack spacing="20px" className="mb-2">
//       <Box className="systolic-data" borderRadius="5px" border="solid">
//         Sys
//       </Box>
//       <span>/</span>
//       <Box className="diastolic-data" borderRadius="5px" border="solid">
//         Dia
//       </Box>
//       <Box className="pulse-data" borderRadius="5px" border="solid">
//         Pulse
//       </Box>
//     </HStack>
//     <Box className="checkbox">
//       <Checkbox className="mb-2 ">Irregular Heartbeat</Checkbox>
//     </Box>

//     <Textarea
//       placeholder="Note..."
//       className="note-box"
//       borderRadius="5px"
//       border="solid"
//       resize="none"
//       isReadOnly
//     />
//   </VStack>
// </div>;

// @media (max-width: 750px) {
//     Th {
//       display: none;
//     }

//     Td {
//       display: grid;
//       grid-template-columns: 19ch auto;
//       gap: 0.5rem;
//       padding: 0.5rem 1rem;
//     }
//     Td:first-child {
//       padding-top: 2rem;
//     }

//     Td:last-child {
//       padding-bottom: 2rem;
//     }
//     Td::before {
//       font-weight: 700;
//       text-transform: capitalize;
//       text-align: left;
//     }
//     Td:nth-of-type(1)::before {
//       content: "Date";
//     }
//     Td:nth-of-type(2)::before {
//       content: "Time";
//     }
//     Td:nth-of-type(3)::before {
//       content: "Systolic";
//     }
//     Td:nth-of-type(4)::before {
//       content: "Diastolic";
//     }
//     Td:nth-of-type(5)::before {
//       content: "Pulse";
//     }
//     Td:nth-of-type(6)::before {
//       content: "Irregular Heartbeat";
//     }
//     Td:nth-of-type(7)::before {
//       content: "Notes";
//     }
//     Td:nth-of-type(8)::before {
//       content: "Delete";
//     }
//     Td:nth-of-type(9)::before {
//       content: "Edit";
//     }
//   }

//mobile-layout
/*
 {readings.length > 0 && (
        <div className="mobile">
          <VStack className="container">
            {readings.map((reading) => {
              return (
                <>
                  <HStack spacing="20px" className="mb-2">
                    <Box className="date" borderRadius="5px" border="ridge">
                      {format(reading.date, "dd/MM/yyyy")}
                    </Box>

                    <Box className="time" borderRadius="5px" border="ridge">
                      {format(reading.date, "h:mm aa")}
                    </Box>
                  </HStack>
                  <HStack spacing="20px" className="mb-2">
                    <Box
                      className="systolic-data"
                      borderRadius="5px"
                      border="ridge"
                    >
                      {reading.systolic}
                    </Box>
                    <span>/</span>
                    <Box
                      className="diastolic-data"
                      borderRadius="5px"
                      border="ridge"
                    >
                      {reading.diastolic}
                    </Box>
                    <Box
                      className="pulse-data"
                      borderRadius="5px"
                      border="ridge"
                    >
                      {reading.pulse}
                    </Box>
                  </HStack>
                  <Box className="checkbox">
                    {" "}
                    Irregular Heartbeat:
                    {reading.irregularBeats ? " yes" : " no"}
                  </Box>

                  <Textarea
                    value={reading.notes}
                    placeholder="Note..."
                    className="note-box"
                    borderRadius="5px"
                    border="ridge"
                    resize="none"
                    isReadOnly
                  />
                  <ResBox label="systolic">{reading.systolic}</ResBox>

                  <Divider
                    borderColor="purple.200"
                    borderWidth="1px"
                    variant="dashed"
                  />
                </>
              );
            })}
          </VStack>
        </div>
      )}
*/
