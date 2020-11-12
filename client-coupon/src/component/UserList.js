import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  BooleanField,
  ImageField,
  DateField,
  RichTextField,
} from "react-admin";
import "./user.css";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="mobile" />
        <TextField source="password" />
        <BooleanField source="administrator" />
        <ImageField
          source="image"
          src="url"
          title="desc"
          className="thumbNailView"
        />
        <TextField source="gender" />
        <DateField source="birth" />
        <TextField source="your Website" />
        <RichTextField source="yourAddress" />
        <RichTextField source="Biography" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
