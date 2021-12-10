import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditReservationForm(props) {

  const firestore = useFirestore();

  const { reservation } = props;

  function handleEditReservationFormSubmission(event) {
    event.preventDefault();
    props.onEditReservation();

    const propertiesToUpdate = {
      organizer: event.target.organizer.value,
      groupName: event.target.groupName.value,
      visitDate: event.target.visitDate.value,
      timeStart: event.target.timeStart.value,
      timeEnd: event.target.timeEnd.value,
      groupSize: event.target.groupSize.value,
      activities: event.target.activities.value,
      notes: event.target.notes.value,
      email: event.target.email.value,
      // id: v4()
    }
    return firestore.update({ collection: 'reservations', doc: reservation.id }, propertiesToUpdate);
  }

  // const info = props.onEditReservation.map(info => {
  //   { info }
  // })
  // console.log(info);
  return (
    <React.Fragment>
      {/* <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='organizer'
          value= {props.organizer} >
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




      {/* </form> */}
      <ReusableForm
        formSubmissionHandler={handleEditReservationFormSubmission}
        buttonText="Update Reservation">
      </ReusableForm>
    </React.Fragment>

  );
}

EditReservationForm.propTypes = {
  onEditReservation: PropTypes.func
};

export default EditReservationForm;