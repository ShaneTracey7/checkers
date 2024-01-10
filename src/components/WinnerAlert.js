import Toast from 'react-bootstrap/Toast';
//import 'bootstrap/dist/css/bootstrap.css';


function WinnerAlert(props) {

  return (
    <div>
    <Toast show={props.show}>
      <Toast.Header>
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
    </div>
  );
}

export default WinnerAlert;