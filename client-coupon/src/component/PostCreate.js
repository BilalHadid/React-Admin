import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
  SelectInput,
} from "react-admin";
import IconPickers from "./IconPicker";

const PostCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        {/* <ImageInput source="images" label="images" accept="images/*">
          <ImageField source="images" title="images" />
        </ImageInput> */}
        {/* <ImageInput
          source=""
          label="title"
          accept="image/png, image/jpg, image/jpeg"
          maxSize={5000000}
          placeholder={
            <p>
              Upload Image
              <span>*File size should not exceed 5MB</span>
            </p>
          }
        > */}
        {/* <ImageField source="images" title="images" /> */}
        {/* <SelectInput
          source="image"
          choices={[
            { id: "1", name: "fa fa-amazon" },
            { id: "2", name: "fa fa-adn" },
            { id: "3", name: "fa fa-android" },
            { id: "4", name: "fa fa-area-chart" },
            { id: "5", name: "fa fa-file-picture-o" },
            { id: "6", name: "fa fa-plus-square" },
            { id: "7", name: "fa fa-genderless" },
            { id: "8", name: "	fa fa-intersex" },
            { id: "9", name: "fa fa-hand-o-down" },
            { id: "10", name: "fa fa-rocket" },
            { id: "11", name: "	fa fa-ambulance" },
            { id: "12", name: "	fa fa-heartbeat" },
            { id: "13", name: "	fa fa-hospital-o" },
            { id: "14", name: "fa fa-rocket" },
            { id: "15", name: "	fa fa-plane" },
            { id: "16", name: "	fa fa-ship" },
            { id: "17", name: "fa fa-taxi" },
            { id: "18", name: "	fa fa-address-book" },
            { id: "19", name: "	fa fa-adjust" },
            { id: "20", name: "	fa fa-bank" },
            { id: "21", name: "fa fa-book" },
            { id: "22", name: "	fa fa-camera" },
            { id: "23", name: "fa fa-gift" },
            { id: "24", name: "fa fa-heart" },
            { id: "25", name: "fa fa-align-center" },
            { id: "26", name: "fa fa-align-justify" },
            { id: "27", name: "fa fa-align-left" },
          ]}
        /> */}
        <IconPickers source="icon" label="icon" />
        <span>{"  "}</span>
        <span>OR</span>
        <TextInput source="icon" label="IconPickers" />
        {/* </ImageInput> */}
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
