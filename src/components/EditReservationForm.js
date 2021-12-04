import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditReservationForm (props) {
  const { Reservation } = props;

  function handleEditReservationFormSubmission(event) {
    event.preventDefault();
    props.onEditReservation({      
      organizer: event.target.organizer.value, 
      groupName: event.target.groupName.value, 
      visitDate: event.target.visitDate.value, 
      groupSize: event.target.groupSize.value, 
      timeStart: event.target.timeStart.value, 
      timeEnd: event.target.timeEnd.value, 
      activities: event.target.activities.value, 
      notes: event.target.notes.value, 
      email: event.target.email.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditReservationFormSubmission}
        buttonText="Update Reservation" />
    </React.Fragment>
  );
}

EditReservationForm.propTypes = {
  onEditReservation: PropTypes.func
};

export default EditReservationForm;