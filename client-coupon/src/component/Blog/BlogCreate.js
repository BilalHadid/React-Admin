import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  SelectInput,
  ImageField,
  DateInput,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

const BlogCreate = (props) => {
  return (
    <Create title="Create a Forum & Categories" {...props}>
      <SimpleForm>
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
    </Create>
  );
};

export default BlogCreate;
