import { Modal, Button } from 'react-bootstrap'
const Result = ({ show, win, handleClose }) => {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Winner!!!!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 className="text-success">{
                    win === "p1" ? "Player 1 won the game" : "Player 2 won the game"
                }</h6>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => window.location = "/"}>
                    Play again
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Result;