import React from 'react'
import { withFirestore, isLoaded } from 'react-redux-firebase';
import 'firebase/compat/auth';


class HomeControl extends React.Component {
  render() {
    const auth = this.props.firebase.auth();

    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access this page.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      return (
        <div>
          <p>Signed in</p>
        </div>)
    }
  }
}

// HomeControl.propTypes = {
//   mainHomeList: PropTypes.object
// };

// const mapStateToProps = state => {
//   return {
//     mainHomeList: state.mainHomeList,
//     formVisibleOnPage: state.formVisibleOnPage
//   }
// }

export default withFirestore(HomeControl);