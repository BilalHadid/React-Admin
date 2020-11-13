import React from "react";
import { List, Datagrid, TextField, ImageField, ImageInput } from "react-admin";
import "../user.css";
const HomeList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />

        <TextField source="BannerName" />
        <TextField source="BannerHeding" />
        <TextField source="BannerSubheading" />
        <ImageField
          source="image"
          src="url"
          title="desc"
          className="thumbNail"
        />
      </Datagrid>
    </List>
  );
};

export default HomeList;
