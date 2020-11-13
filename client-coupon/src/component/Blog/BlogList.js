import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  ImageField,
  RichTextField,
  DateField,
} from "react-admin";
import "../user.css";

const BlogList = (props) => {
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
        <RichTextField source="description" />
        <TextField source="created" />

        <BooleanField source="status" />
        <DateField source="timestamp" />
        <EditButton basePath="/blog" />
        <DeleteButton basePath="/blog" />
      </Datagrid>
    </List>
  );
};

export default BlogList;
