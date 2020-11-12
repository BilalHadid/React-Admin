import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  ImageField,
} from "react-admin";

const StoreCreate = (props) => {
  return (
    <Create title="Create a Event" {...props}>
      <SimpleForm>
        <ImageInput source="image" label="desc" accept="">
          <ImageField source="image" src="url" title="desc" />
        </ImageInput>
        <TextInput source="title" />
        <TextInput source="link" />
        <BooleanInput source="featured" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Create>
  );
};

export default StoreCreate;
