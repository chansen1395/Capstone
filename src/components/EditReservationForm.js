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
      timeStart: event.target.timeStart.value, 
      timeEnd: event.target.timeEnd.value, 
      groupSize: event.target.groupSize.value, 
      activities: event.target.activities.value, 
      notes: event.target.notes.value, 
      email: event.target.email.value, 
      id: v4()
    });
  }

const info = props.onEditReservation.map(info => {
  {info}
})
console.log(info);
  return (
    <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='organizer'
          value='Names'>
        </input>
        <input
          type='text'
          name='groupName'
          value='Names'>
        </input>
        <input
          type='text'
          name='visitDate'
          value='Names'>
        </input>
        <input
          type='text'
          name='timeStart'
          value='Names'>
        </input>
        <input
          type='text'
          name='timeEnd'
          value='Names'>
        </input>
        <input
          type='text'
          name='names'
          value='Names'>
        </input>
        <input
          type='text'
          name='names'
          value='Names'>
        </input>
        {/* organizer: event.target.organizer.value, 
      groupName: event.target.groupName.value, 
      visitDate: event.target.visitDate.value, 
      timeStart: event.target.timeStart.value, 
      timeEnd: event.target.timeEnd.value, 
      groupSize: event.target.groupSize.value, 
      activities: event.target.activities.value, 
      notes: event.target.notes.value, 
      email: event.target.email.value,  */}
        
        
        
        
        </form>
        formSubmissionHandler={handleEditReservationFormSubmission}
    </React.Fragment>
  );
}

EditReservationForm.propTypes = {
  onEditReservation: PropTypes.func
};

export default EditReservationForm;