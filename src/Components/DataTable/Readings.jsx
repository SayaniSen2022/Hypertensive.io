import { useState, useRef, useEffect } from "react";
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { format } from "date-fns";
import InputModal from "./InputModal";
import "./InputModal.css";
import "./Readings.css";
import ResBox from "./ResBox";

import {
  Alert,
  AlertIcon,
  Button,
  Textarea,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Divider,
  Box,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

const getLocalData = () => {
  let isLoggedIn = false;
  if (isLoggedIn === false) {
    let localData = JSON.parse(localStorage.getItem("readingData"));
    console.log(localData);

    if (localData) {
      localData = localData.map((e) => {
        e.date = new Date(e.date);
        return e;
      });
      return localData;
    } else {
      return [];
    }
  }
  //need to fetch data from API if isLoggedIn will be true
  /*
    fetch('api path').then(res => {
      if(res){
        return res.json()
      }
      else{
        throw new Error("no data")
      }
    }).then(data=>{}).catch(err => {console.error(err);});
  */
};

const Readings = () => {
  const [readings, setReadings] = useState(getLocalData());

  useEffect(() => {
    localStorage.setItem("readingData", JSON.stringify(readings));
  }, [readings]);
  // console.log(localStorage.getItem("readingData"));

  const modalRef = useRef();

  const toast = useToast();

  // const editReading = (editedReading) => {
  //   setReadings([...readings, editedReading]);
  //   toast({
  //     title: "Success!",
  //     description: "New reading edited successfully.",
  //     status: "success",
  //     duration: 2000,
  //     isClosable: true,
  //   });
  // };

  const addReadings = (newReading) => {
    setReadings([...readings, newReading]);
    console.log(newReading);
    toast({
      title: "Success!",
      description: "New reading added successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <div>
      {readings.length === 0 && (
        <Alert status="warning">
          <AlertIcon />
          Seems like you do not have any readings yet!
        </Alert>
      )}
      {readings.length > 0 && (
        <div>
          <TableContainer className="border-2 rounded m-2">
            <Table>
              <Thead>
                <Tr>
                  <Th textAlign="center">Date</Th>
                  <Th textAlign="center">Time</Th>
                  <Th textAlign="center" isNumeric>
                    Systolic
                  </Th>
                  <Th textAlign="center" isNumeric>
                    Diastolic
                  </Th>
                  <Th textAlign="center" isNumeric>
                    Pulse
                  </Th>
                  <Th textAlign="center">Irregular Heartbeat</Th>
                  <Th textAlign="center">Notes</Th>
                  <Th textAlign="center">Delete</Th>
                  <Th textAlign="center">Edit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {readings.map((reading) => {
                  return (
                    <Tr key={reading.id}>
                      <Td>{format(reading.date, "dd/MM/yyyy")}</Td>
                      <Td>{format(reading.date, "h:mm aa")}</Td>
                      <Td>{reading.systolic}</Td>
                      <Td>{reading.diastolic}</Td>
                      <Td>{reading.pulse}</Td>
                      <Td>{reading.irregularBeats ? "yes" : "no"}</Td>
                      <Td>
                        <Textarea
                          textAlign="start"
                          size="sm"
                          overflow="hidden"
                          border="none"
                          value={reading.notes}
                          resize="none"
                          isReadOnly
                        />
                      </Td>
                      <Td>
                        <IconContext.Provider
                          value={{ className: "delete-icon" }}
                        >
                          <MdDelete
                            onClick={() => {
                              let copy = [...readings];
                              copy = copy.filter(
                                (item) => item.id !== reading.id
                              );
                              setReadings(copy);
                            }}
                          />
                        </IconContext.Provider>
                      </Td>
                      <Td>
                        <IconContext.Provider
                          value={{ className: "edit-icon" }}
                        >
                          <AiFillEdit
                            onClick={() =>
                              modalRef.current.onEditReading(reading)
                            }
                          />
                        </IconContext.Provider>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
      {readings.length > 0 && (
        <div className="mobile">
          <VStack className="container">
            {readings.map((reading) => {
              return (
                <>
                  <HStack spacing="80px">
                    <ResBox label="Date" border="ridge" width="8.5rem">
                      {format(reading.date, "dd/MM/yyyy")}
                    </ResBox>
                    <ResBox label="Time" border="ridge" width="7.5rem">
                      {format(reading.date, "h:mm aa")}
                    </ResBox>
                  </HStack>

                  <HStack>
                    <ResBox label="Systolic" border="ridge" width="6.25rem">
                      {reading.systolic}
                    </ResBox>
                    <span className="slash">/</span>
                    <ResBox label="Diastolic" border="ridge" width="6.25rem">
                      {reading.diastolic}
                    </ResBox>
                    <ResBox label="Pulse" border="ridge" width="6.25rem">
                      {reading.pulse}
                    </ResBox>
                  </HStack>
                  <HStack>
                    <span className="heartbeat">Irregular Heartbeat:</span>
                    <Box
                      style={{
                        color:
                          reading.irregularBeats === "yes"
                            ? "red"
                            : "lightgreen",
                      }}
                    >
                      {reading.irregularBeats ? " yes" : " no"}
                    </Box>
                  </HStack>

                  <Textarea
                    value={reading.notes}
                    placeholder="Note..."
                    className="note-box"
                    borderRadius="5px"
                    border="ridge"
                    resize="none"
                    isReadOnly
                  />

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

      <InputModal
        ref={modalRef}
        totalReadings={readings.length}
        addReadings={addReadings}
        // editReadings={editReading}
      />
      <Button
        className="float-button p-5"
        size="lg"
        onClick={() => modalRef.current.onAddReading()}
      >
        <IconContext.Provider value={{ className: "float-button-icon" }}>
          <AiOutlinePlus size={35} />
        </IconContext.Provider>
      </Button>
    </div>
  );
};
export default Readings;
