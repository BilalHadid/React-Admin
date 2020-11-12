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
        <TextField source="id" />
        <ImageField
          source="image"
          src="url"
          title="desc"
          className="thumbNail"
        />
        <TextField source="title" />
        <UrlField source="link" />
        <BooleanField source="featured" />
        <BooleanField source="status" />
        <EditButton basePath="/store" />
        <DeleteButton basePath="/store" />
      </Datagrid>
    </List>
  );
};

export default StoreList;
