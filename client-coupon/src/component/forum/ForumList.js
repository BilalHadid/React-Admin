import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
} from "react-admin";
const ForumList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />

        <TextField source="type" />
        <TextField source="title" />
        <TextField source="detail" />
        <BooleanField source="status" />
        <EditButton basePath="/forumcategory" />
        <DeleteButton basePath="/forumcategory" />
      </Datagrid>
    </List>
  );
};

export default ForumList;
