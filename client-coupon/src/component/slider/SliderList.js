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
const SliderList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ImageField
          source="image"
          src="url"
          label="SliderImage"
          className="thumbNail1"
        />

        <EditButton basePath="/slider" />
        <DeleteButton basePath="/slider" />
      </Datagrid>
    </List>
  );
};

export default SliderList;
