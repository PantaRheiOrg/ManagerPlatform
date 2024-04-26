import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface EditStaffModelProps {
    userId: number | undefined;
    show: boolean;
    handleClose: () => void;
    handleSave: (userId: number | undefined) => void;
}

const EditStaffModel: React.FC<EditStaffModelProps> = ({
    userId,
    show,
    handleClose,
    handleSave,
}) => {
    return (
        <>
            <Button variant="primary">Launch demo modal</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSave(userId)}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditStaffModel;
