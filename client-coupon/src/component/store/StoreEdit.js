import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  ImageField,
  DateInput,
  RadioButtonGroupInput,
} from "react-admin";
import { Card } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
const StoreEdit = (props) => {
  return (
    <Edit title="Edit a Event" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
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
    </Edit>
  );
};

export default StoreEdit;
