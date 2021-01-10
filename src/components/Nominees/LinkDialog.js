import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { Card, Container } from "react-bootstrap";
import clsx from "clsx";

function DialogRaw(props) {
  const { onClose, value, open } = props;
  const [copied, setCopied] = useState(false);

  const handleCancel = () => {
    onClose();
  };

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(value);
  };

  return (
    <Dialog
      disableEscapeKeyDown
      maxWidth="xl"
      aria-labelledby="Shareable Link"
      open={open}
    >
      <DialogTitle id="Shareable Link">Shareable Link</DialogTitle>
      <DialogContent dividers>
        <p>{value}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button autoFocus onClick={handleCopy} color="primary">
          {copied ? "Copy Again" : "Copy"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function LinkDialog(props) {
  const { nominees } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Dione");

  const generateLink = () => {
    console.log(nominees);
    return `${process.env.REACT_APP_URL}?shared=true&${nominees
      .map((nominee) => `nominees[]=${nominee.imdbID}&`)
      .join("")}`;
  };

  const handleOpen = () => {
    setValue(generateLink());
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);
  };

  return (
    <Card className={clsx("column", "box")}>
      <Container>
        <p>
          Great job - you've filled out your completed nominations list of 5
          movies! If you'd like to share your list with others, you can create a
          shareable link below:
        </p>
        <Button fullWidth variant="contained" onClick={handleOpen}>
          Generate Shareable Link
        </Button>
        <div style={{ height: 10 }} />
        <DialogRaw
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
          generateLink={generateLink}
        />
      </Container>
    </Card>
  );
}
