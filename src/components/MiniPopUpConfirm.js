import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MiniPopUpConfirm({title_popup_confirm,description_popup_confirm}) {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
 
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
              class="fa-solid fa-circle-exclamation fa-xl"
              style={{ color: "#833988" }}
            ></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:"grid",placeItems:"center"}}>
          <h5 style={{color:"#833988",fontWeight:700}}>{title_popup_confirm}</h5>
          <p style={{color:"#833988",fontWeight:400}}>{description_popup_confirm}</p>{" "}
        
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MiniPopUpConfirm;
