import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem
} from "shards-react";

const Shriya = ({ patientDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={patientDetails.avatar}
          alt={patientDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{patientDetails.name}</h4>
      <span className="text-muted d-block mb-2">{patientDetails.email}</span>
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">chat</i> Send Message
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {patientDetails.metaTitle}
        </strong>
        <span>{patientDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

Shriya.propTypes = {
  /**
   * The user details object.
   */
  Shriya: PropTypes.object
};

Shriya.defaultProps = {
  patientDetails: {
    name: "Shriya Siddhartha",
    avatar: require("./../../images/avatars/shriya.jpeg"),
    email: "shriyasiddhartha@gmail.com",
    metaTitle: "Notes",
    metaValue:
      "This patient has been diagnosed as Covid +ve"
  }
};

export default Shriya;
