import { useState, useRef, useEffect } from "react";
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { format } from "date-fns";
import InputModal from "./InputModal";
import "./InputModal.css";
import { Alert, AlertIcon } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const getLocalData = () => {
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
};

const Readings = () => {
  const [readings, setReadings] = useState(getLocalData());

  useEffect(() => {
    localStorage.setItem("readingData", JSON.stringify(readings));
  }, [readings]);

  const modalRef = useRef();

  const toast = useToast();

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
          <TableContainer className="p-2 border-2 rounded m-2">
            <Table className="table " size="sm">
              <Thead className="table-head">
                <Tr>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th isNumeric>Systolic</Th>
                  <Th isNumeric>Diastolic</Th>
                  <Th isNumeric>Pulse</Th>
                  <Th>Irregular Heartbeat</Th>
                  <Th>Notes</Th>
                  <Th>Delete</Th>
                  <Th>Edit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {readings.map((reading) => {
                  return (
                    <Tr key={reading.id}>
                      <Td color="brand.100">
                        {format(reading.date, "dd/MM/yyyy")}
                      </Td>
                      <Td color="brand.100">
                        {format(reading.date, "h:mm aa")}
                      </Td>
                      <Td color="brand.100" isNumeric>
                        {reading.systolic}
                      </Td>
                      <Td color="brand.100" isNumeric>
                        {reading.diastolic}
                      </Td>
                      <Td color="brand.100" isNumeric>
                        {reading.pulse}
                      </Td>
                      <Td color="brand.100">
                        {reading.irregularBeats ? "yes" : "no"}
                      </Td>
                      <Td color="brand.100">{reading.notes}</Td>
                      <Td color="brand.100">
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
                      <Td color="brand.100">
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
      <InputModal
        ref={modalRef}
        totalReadings={readings.length}
        addReadings={addReadings}
      />
      <Button
        bg="brand.200"
        className="float-button p-5"
        size="lg"
        onClick={() => modalRef.current.onAddReading()}
      >
        <IconContext.Provider value={{ className: "top-react-icons" }}>
          <AiOutlinePlus size={30} color="white" />
        </IconContext.Provider>
      </Button>
    </div>
  );
};
export default Readings;
