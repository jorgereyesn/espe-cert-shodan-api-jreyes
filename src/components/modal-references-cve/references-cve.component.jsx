import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#E3DFDF",
    border: "3px solid #66FA00",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: "70%",
    overflow: "scroll",
  },
}));

export default function ReferencesCveComponent({ buttonName, references }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color={"secondary"} onClick={handleOpen} variant="outlined">
        {buttonName}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {references.map((item, index) => (
              <p>
                <a
                  key={index + item}
                  href={item}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item}{" "}
                </a>
              </p>
            ))}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
