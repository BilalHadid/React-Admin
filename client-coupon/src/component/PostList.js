import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageField,
  BooleanField,
  Filter,
  SearchInput,
} from "react-admin";
import "./user.css";
const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="title" alwaysOn />
  </Filter>
);

const PostList = (props) => {
  return (
    <List
      {...props}
      filters={<PostFilter />}
      sort={{ field: "id", order: "DESC" }}
    >
      <Datagrid>
        <TextField source="id" />
        <ImageField source="images" title="images" className="thumbNail" />
        <TextField source="title" />
        <BooleanField source="status" />
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};

export default PostList;
