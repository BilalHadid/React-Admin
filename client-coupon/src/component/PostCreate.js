import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
} from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <ImageInput source="images" label="images" accept="images/*">
          <ImageField source="images" title="images" />
        </ImageInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
