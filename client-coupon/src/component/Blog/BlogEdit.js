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
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const BlogEdit = (props) => {
  return (
    <Edit title="Edit a User" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <SelectInput source="user" choices={[{ id: "jhon", name: "Jhon" }]} />
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
