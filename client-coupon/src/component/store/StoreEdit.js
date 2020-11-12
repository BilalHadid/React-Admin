import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  ImageField,
} from "react-admin";
const StoreEdit = (props) => {
  return (
    <Edit title="Edit a Event" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ImageInput source="image" label="desc" accept="">
          <ImageField source="image" src="url" title="desc" />
        </ImageInput>
        <TextInput source="title" />
        <TextInput source="link" />
        <BooleanInput source="featured" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default StoreEdit;
