import React from "react";

import CVVModal from "./CVVModal";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
} from "@patternfly/react-core";

export default function CVVButton({ cvv }) {
  const [open, setOpen] = React.useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleOnClick}>
        <Card isHoverable>
          <CardHeader>
            <strong className="env-name">{cvv.name}</strong>
            <div>
              <strong className="version">Version:&nbsp;</strong>
              {cvv.version}
            </div>
          </CardHeader>
          <CardBody>
            <div className="cvv-descrip">{cvv.description}</div>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Button>
      <CVVModal
        title={cvv.name}
        id={`modal-${cvv.id}`}
        open={open}
        onClose={handleOnClick}
      />
    </div>
  );
}
