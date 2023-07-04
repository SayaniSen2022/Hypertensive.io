import { useState, forwardRef, useImperativeHandle } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import "./InputModal.css";

const InputModal = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      onAddReading: onAddReading,
      onEditReading: onEditReading,
    };
  });

  const onAddReading = () => {
    setIsEdit(false);
    onOpen();
    setSystolic("");
    setDiastolic("");
    setPulse("");
    setNotes("");
    setIsIrregular(false);
  };

  const onEditReading = (reading) => {
    setIsEdit(true);
    onOpen();
    setReadingId(reading.id);
    setStartDate(reading.date);
    setSystolic(reading.systolic);
    setDiastolic(reading.diastolic);
    setPulse(reading.pulse);
    setNotes(reading.notes);
    setIsIrregular(reading.isIrregular);
  };
  const [startDate, setStartDate] = useState(new Date()); //for date-picker
  const { isOpen, onOpen, onClose } = useDisclosure({
    onOpen: () => {
      setSystolic("");
      setDiastolic("");
      setPulse("");
    },
  }); //for modal

  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [pulse, setPulse] = useState("");
  const [notes, setNotes] = useState("");
  const [isIrregular, setIsIrregular] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [readingId, setReadingId] = useState(null);

  const systolicChangeHandler = (event) => {
    setSystolic(event.target.value);
  };

  const diastolicChangeHandler = (event) => {
    setDiastolic(event.target.value);
  };

  const pulseChangeHandler = (event) => {
    setPulse(event.target.value);
  };
  const notesChangeHandler = (event) => {
    const textdata = event.target.value;
    if (textdata.length > 100) {
      return alert("Notes cannot exceed more than 100 characters in length!");
    } else {
      setNotes(textdata);
    }
  };
  const heartBeatHandler = () => {
    setIsIrregular(!isIrregular);
  };

  const handleSubmit = () => {
    onClose();
    if (isEdit) {
      props.editReadings(createNewDataObject());
    } else {
      props.addReadings(createNewDataObject());
    }

    resetReadings();
  };
  const createNewDataObject = () => {
    const newData = {
      id: isEdit ? readingId : props.totalReadings + 1,
      systolic: parseInt(systolic),
      diastolic: parseInt(diastolic),
      pulse: parseInt(pulse),
      date: startDate,
      notes: notes,
      irregularBeats: isIrregular,
    };

    return newData;
  };

  const resetReadings = () => {
    setSystolic("");
    setDiastolic("");
    setPulse("");
    setNotes("");
    setIsIrregular(false);
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isEdit ? "Edit" : "New"} Reading</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel color="brand.100">Date</FormLabel>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy"
                wrapperClassName="datePicker"
              />
            </FormControl>
            <FormControl>
              <FormLabel color="brand.100">Time</FormLabel>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={1}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="brand.100">
                Systolic<span className="units"> (mmHg)</span>
              </FormLabel>
              <Input
                placeholder="Systolic"
                type="number"
                value={systolic}
                onChange={systolicChangeHandler}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="brand.100">
                Diastolic<span className="units"> (mmHg)</span>
              </FormLabel>
              <Input
                placeholder="Diastolic"
                value={diastolic}
                onChange={diastolicChangeHandler}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="brand.100">
                Pulse<span className="units"> (BPM)</span>
              </FormLabel>
              <Input
                placeholder="Pulse"
                value={pulse}
                onChange={pulseChangeHandler}
              />
            </FormControl>
            <Checkbox
              color="brand.100"
              value={isIrregular}
              className="checkbox"
              colorScheme="red"
              onChange={heartBeatHandler}
            >
              Irregular Heartbeat
            </Checkbox>

            <FormLabel color="brand.100" optionalIndicator>
              Notes
            </FormLabel>
            <Textarea
              size="sm"
              placeholder="Enter remarks..."
              value={notes}
              onChange={notesChangeHandler}
            />

            <FormControl>
              <div className="index mt-2">
                <span className="star">*</span>Required fields
              </div>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              className="mr-5 close-btn"
              onClick={onClose}
              colorScheme="red"
            >
              Close
            </Button>
            <Button
              className="save-btn"
              type="submit"
              colorScheme="green"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
export default InputModal;
