import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  ImageField,
  RadioButtonGroupInput,
  DateInput,
} from "react-admin";
import { Card } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import "../user.css";

const StoreCreate = (props) => {
  return (
    <Create title="Create a Event" {...props}>
      <SimpleForm>
        <TextInput source="name" />

        <TextInput source="title" />
        <TextInput source="url" />
        <TextInput source="Tracking Link" />
        <TextInput source="metatitle" />
        <TextInput source="metaKeywords" />
        <TextInput source="metaDisc" />
        <RichTextInput source="Description" />
        <Card className="Rasdio">
          <RadioButtonGroupInput
            source="SelectNetwork"
            choices={[
              { id: "programming", name: "Paid On Result" },
              { id: "photography", name: "ClickWise" },
            ]}
          />
        </Card>
        <DateInput source="leftTime" />
        <ImageInput source="image" label="desc" accept="">
          <ImageField source="image" src="url" title="desc" />
        </ImageInput>

        <BooleanInput source="featured" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Create>
  );
};

export default StoreCreate;
