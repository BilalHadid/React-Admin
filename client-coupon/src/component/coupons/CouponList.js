import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  ImageField,
  Filter,
  SearchInput,
} from "react-admin";

import "../user.css";

const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="title" resettable alwaysOn />
  </Filter>
);

const CouponList = (props) => {
  return (
    <List {...props} filters={<PostFilter />}>
      <Datagrid>
        <TextField source="id" />
        <ImageField source="image" className="thumbNail" />
        <TextField source="type" />
        <TextField source="ForumCategory" />
        <TextField source="title" />
        <TextField source="store" />
        <TextField source="category" />
        <TextField source="user" />

        <BooleanField source="fetured" />
        <BooleanField source="Verified" />
        <BooleanField source="status" />
        <EditButton basePath="/CouponDeal" />
        <DeleteButton basePath="/CouponDeal" />
      </Datagrid>
    </List>
  );
};

export default CouponList;
