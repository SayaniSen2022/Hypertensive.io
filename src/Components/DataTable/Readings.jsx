import { useState, useRef, useEffect, Fragment } from "react";
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
};

const Readings = () => {
  const [readings, setReadings] = useState(getLocalData());

  useEffect(() => {
    localStorage.setItem("readingData", JSON.stringify(readings));
  }, [readings]);

  const modalRef = useRef();

  const toast = useToast();

  const editReading = (editedReading) => {
    const prevArr = [...readings];
    for (let i = 0; i < prevArr.length; i++) {
      if (prevArr[i].id === editedReading.id) {
        prevArr[i].date = editedReading.date;
        prevArr[i].systolic = editedReading.systolic;
        prevArr[i].diastolic = editedReading.diastolic;
        prevArr[i].pulse = editedReading.pulse;
        prevArr[i].irregularBeats = editedReading.irregularBeats;
        prevArr[i].notes = editedReading.notes;
        break;
      }
    }
    setReadings(prevArr);
    toast({
      title: "Success!",
      description: "Reading edited successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const addReadings = (newReading) => {
    setReadings([...readings, newReading]);
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
          <TableContainer
            className="border-2 rounded m-2"
            overflowY="auto"
            overflowX="auto"
          >
            <Table variant="striped" colorScheme="blackAlpha">
              <Thead position="sticky" top="0">
                <Tr>
                  <Th id="heading" textAlign="center">
                    Date
                  </Th>
                  <Th id="heading" textAlign="center">
                    Time
                  </Th>
                  <Th id="heading" textAlign="center" isNumeric>
                    Systolic
                  </Th>
                  <Th id="heading" textAlign="center" isNumeric>
                    Diastolic
                  </Th>
                  <Th id="heading" textAlign="center" isNumeric>
                    Pulse
                  </Th>
                  <Th id="heading" textAlign="center">
                    Irregular Heartbeat
                  </Th>
                  <Th id="heading" textAlign="center">
                    Notes
                  </Th>
                  <Th id="heading" textAlign="center">
                    Delete
                  </Th>
                  <Th id="heading" textAlign="center">
                    Edit
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                {readings.map((reading) => (
                  <Fragment>
                    <Tr>
                      <Td>{format(reading.date, "dd/MM/yyyy")}</Td>
                      <Td>{format(reading.date, "h:mm aa")}</Td>
                      <Td textAlign="center">{reading.systolic}</Td>
                      <Td textAlign="center">{reading.diastolic}</Td>
                      <Td textAlign="center">{reading.pulse}</Td>
                      <Td textAlign="center">
                        {reading.irregularBeats ? "yes" : "no"}
                      </Td>
                      <Td>
                        <Textarea
                          textAlign="center"
                          overflow="hidden"
                          border="none"
                          size="sm"
                          placeholder="Note..."
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
                  </Fragment>
                ))}
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
                <Fragment>
                  <HStack spacing="50px">
                    <ResBox label="Date" width="9rem">
                      {format(reading.date, "dd/MM/yyyy")}
                    </ResBox>
                    <ResBox label="Time" width="9.5rem">
                      {format(reading.date, "h:mm aa")}
                    </ResBox>
                  </HStack>

                  <HStack>
                    <ResBox label="Systolic" width="7rem">
                      {reading.systolic}
                    </ResBox>
                    <span className="slash">/</span>
                    <ResBox label="Diastolic" width="7rem">
                      {reading.diastolic}
                    </ResBox>
                    <ResBox label="Pulse" width="6rem">
                      {reading.pulse}
                    </ResBox>
                  </HStack>
                  <HStack>
                    <span className="heartbeat">Irregular Heartbeat:</span>?
                    "#FF5C5C" ? "#FF5C5C"
                    <Box>{reading.irregularBeats ? " yes" : " no"}</Box>
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
                    borderColor="#0acef5"
                    borderWidth="1px"
                    variant="dashed"
                  />
                </Fragment>
              );
            })}
          </VStack>
        </div>
      )}

      <InputModal
        ref={modalRef}
        totalReadings={readings.length}
        addReadings={addReadings}
        editReadings={editReading}
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
