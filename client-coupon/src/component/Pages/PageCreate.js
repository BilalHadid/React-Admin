import React from "react";
import { Create, SimpleForm, TextInput, SelectInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";
const PageCreate = (props) => {
  return (
    <Create title="Create a Pages" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <RichTextInput source="body" />
        <SelectInput
          source="footerWidget"
          choices={[
            { id: "1", name: "Widget1" },
            { id: "2", name: "Widget2" },
            { id: "3", name: "Widget3" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default PageCreate;
