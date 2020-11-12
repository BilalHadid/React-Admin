import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const EventList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="url" />

        <EditButton basePath="/events" />
        <DeleteButton basePath="/events" />
      </Datagrid>
    </List>
  );
};

export default EventList;
