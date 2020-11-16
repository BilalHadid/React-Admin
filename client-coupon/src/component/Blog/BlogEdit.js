import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  BooleanInput,
  DateInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const BlogEdit = (props) => {
  return (
    <Edit title="Edit a User" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput label="users" source="user" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <SelectInput
          source="tag"
          choices={[{ id: "coupon", name: "Huge Discount" }]}
        />

        <ImageInput source="image" label="desc" accept="image/*">
          <ImageField source="url" title="desc" />
        </ImageInput>

        <RichTextInput source="description" />
        <DateInput source="timestamp" />

        <BooleanInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default BlogEdit;
