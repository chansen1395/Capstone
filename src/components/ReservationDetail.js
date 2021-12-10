import React from "react";
import PropTypes from "prop-types";

function ReservationDetail(props){
  const { reservation, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Reservation Detail</h1>
      <h3>{reservation.groupName}: Contact - {reservation.organizer}</h3>
      <p><em>{reservation.email}</em></p>
      {console.log("wait time: " + reservation.formattedWaitTime)}
      <p><em>Time Open: {reservation.formattedWaitTime}</em></p>
      <button onClick={ props.onClickingEdit }>Update Reservation</button>
      <button onClick={()=> onClickingDelete(reservation.id) }>Close Reservation</button>
      <hr/>
    </React.Fragment>
  );
}

// organizer: event.target.organizer.value, 
// groupName: event.target.groupName.value, 
visitDate: event.target.visitDate.value, 
timeStart: event.target.timeStart.value, 
timeEnd: event.target.timeEnd.value, 
groupSize: event.target.groupSize.value, 
activities: event.target.activities.value, 
notes: event.target.notes.value, 
email: event.target.email.value, 

ReservationDetail.propTypes = {
  reservation: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ReservationDetail;