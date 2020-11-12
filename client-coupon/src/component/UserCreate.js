import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  BooleanInput,
  DateInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
const UserCreate = (props) => {
  return (
    <Create title="Create a new User" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="mobile" />
        <TextInput source="password" />
        <BooleanInput source="administrator" />
        <ImageInput source="image" label="desc" accept="image/*">
          <ImageField source="url" title="desc" />
        </ImageInput>
        <TextInput source="gender" />
        <DateInput source="birth" />
        <TextInput source="your Website" />
        <RichTextInput source="yourAddress" />
        <RichTextInput source="Biography" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
