import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageField,
  BooleanField,
  UrlField,
} from "react-admin";
import "../user.css";
const StoreList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" label="#" />

        <TextField source="title" label="Title" />

        {/* <UrlField source="" /> */}
        <TextField source="SelectNetwork" label="Networks" />
        <TextField source="Address" />
        <BooleanField source="featured" />
        <BooleanField source="status" />
        <EditButton basePath="/store" />
        <DeleteButton basePath="/store" />
      </Datagrid>
    </List>
  );
};

export default StoreList;
