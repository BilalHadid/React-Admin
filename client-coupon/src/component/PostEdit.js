import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageField,
  ImageInput,
} from "react-admin";

const PostEdit = (props) => {
  return (
    <Edit title="Edit a Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ImageInput source="images" label="images" accept="">
          <ImageField source="images" title="images" />
        </ImageInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
