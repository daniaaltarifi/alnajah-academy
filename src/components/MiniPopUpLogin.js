import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MiniPopUp({title_popup,description_popup}) {
  const [smShow, setSmShow] = useState(false);
  // const [lgShow, setLgShow] = useState(false);
 
  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header  style={{display:"grid",placeItems:"center"}}>
          <Modal.Title id="example-modal-sizes-title-sm" >
            <i
              class="fa-solid fa-triangle-exclamation fa-xl"
              style={{ color: "#934941" }}
            ></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:"grid",placeItems:"center"}}>
          <h5 style={{color:"#833988",fontWeight:700}}>{title_popup}</h5>
          <p style={{color:"#833988",fontWeight:400}}>{description_popup}</p>{" "}
          <Button  className="me-2" style={{backgroundColor:"#833988",border:"none"}}>
          تسجيل الدخول      </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MiniPopUp;
