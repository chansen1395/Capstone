import React from "react";
import PropTypes from "prop-types";
// import React, { useState } from 'react';
import { withFirebase } from '../firebase';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='organizer'
          value= {props.organizer} >
        </input>
        <input
          type='text'
          name='groupName'
          value='groupName'>
        </input>
        <input
          type='number'
          name='groupSize'
          value='groupSize'>
        </input>
        <input
          type='date'
          name='visitDate'
          value='visitDate'>
        </input>
        <input
          type='date'
          name='timeStart'
          value='timeStart'>
        </input>
        <input
          type='date'
          name='timeEnd'
          value='timeEnd'>
        </input>
        <input
          type='text'
          name='activities'
          value='activities'>
        </input>
        <input
          type='text'
          name='notes'
          value='notes'>
        </input>
        <input
          type='email'
          name='email'
          value='email'>
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
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;