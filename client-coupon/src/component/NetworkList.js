import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const NetworkList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <TextField source="password" />
        <EditButton basePath="/networks" />
        <DeleteButton basePath="/networks" />
      </Datagrid>
    </List>
  );
};

export default NetworkList;
