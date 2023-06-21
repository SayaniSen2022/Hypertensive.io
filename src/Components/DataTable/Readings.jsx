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
import "./Readings.css";

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
          <TableContainer className="p-2 border-2 rounded m-2">
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th className="table-head">Date</Th>
                  <Th className="table-head">Time</Th>
                  <Th className="table-head" isNumeric>
                    Systolic
                  </Th>
                  <Th className="table-head" isNumeric>
                    Diastolic
                  </Th>
                  <Th className="table-head" isNumeric>
                    Pulse
                  </Th>
                  <Th className="table-head">Irregular Heartbeat</Th>
                  <Th className="table-head">Notes</Th>
                  <Th>Delete</Th>
                  <Th>Edit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {readings.map((reading) => {
                  return (
                    <Tr key={reading.id}>
                      <Td color="brand.100" className="table-details">
                        {format(reading.date, "dd/MM/yyyy")}
                      </Td>
                      <Td color="brand.100" className="table-details">
                        {format(reading.date, "h:mm aa")}
                      </Td>
                      <Td color="brand.100" isNumeric className="table-details">
                        {reading.systolic}
                      </Td>
                      <Td color="brand.100" isNumeric className="table-details">
                        {reading.diastolic}
                      </Td>
                      <Td color="brand.100" isNumeric className="table-details">
                        {reading.pulse}
                      </Td>
                      <Td
                        className="table-details"
                        style={{
                          color:
                            reading.irregularBeats === true
                              ? "#FF5C5C"
                              : "lightgreen",
                        }}
                      >
                        {reading.irregularBeats ? "yes" : "no"}
                      </Td>
                      <Td color="brand.100" className="table-details">
                        {reading.notes}
                      </Td>
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
