import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

const Winner = (props) => {
  return (
    <div>
      <Modal
        fade={true}
        centered={true}
        isOpen={props.show}
        toggle={props.toggle}
        className="congratulations"
      >
        <ModalHeader toggle={props.toggle}>
          Congratulations! You won!
        </ModalHeader>
        <ModalBody>Thank you for playing this game. You are awesome!</ModalBody>
        <ModalFooter>
          <Button className="back-to-game-btn" onClick={props.toggle}>
            Back to the game
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Winner;
