import React from "react";
import { Create, SimpleForm, ImageInput, ImageField } from "react-admin";
const SliderCreate = (props) => {
  return (
    <Create title="Create a Event" {...props}>
      <SimpleForm>
        <ImageInput source="image" label="desc" accept="">
          <ImageField source="image" src="url" title="desc" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default SliderCreate;
