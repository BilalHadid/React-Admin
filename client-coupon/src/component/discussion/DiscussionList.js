import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  ImageField,
} from "react-admin";
import "../user.css";
const DiscussionList = (props) => {
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
        <TextField source="type" />
        <TextField source="title" />
        <TextField source="detail" />
        <TextField source="user" />

        <BooleanField source="fetured" />
        <BooleanField source="Action" />
        <BooleanField source="status" />
        <EditButton basePath="/discussion" />
        <DeleteButton basePath="/discussion" />
      </Datagrid>
    </List>
  );
};

export default DiscussionList;
