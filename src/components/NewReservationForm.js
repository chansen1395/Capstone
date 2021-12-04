import { useFirestore } from 'react-redux-firebase'
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

const firestore = useFirestore();


function NewReservationForm(props){

  function handleNewReservationFormSubmission(event) {
    event.preventDefault();
    props.onNewReservationCreation({
      organizer: event.target.organizer.value, 
      groupName: event.target.groupName.value, 
      visitDate: event.target.visitDate.value, 
      timeStart: event.target.timeStart.value, 
      timeEnd: event.target.timeEnd.value, 
      groupSize: event.target.groupSize.value, 
      activities: event.target.activities.value, 
      notes: event.target.notes.value, 
      email: event.target.email.value, 
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewReservationFormSubmission}
        buttonText="Submit Event" />
    </React.Fragment>
  );
}

NewReservationForm.propTypes = {
  onNewReservationCreation: PropTypes.func
};

export default NewReservationForm;