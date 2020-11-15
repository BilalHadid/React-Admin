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
const CouponCreate = (props) => {
  return (
    <Create title="Create a Forum & Categories" {...props}>
      <SimpleForm>
        <SelectInput source="user" choices={[{ id: "jhon", name: "Jhon" }]} />
        <SelectInput
          source="ForumCategory"
          choices={[{ id: "coupon", name: "General Coupon" }]}
        />
        <SelectInput
          source="store"
          choices={[
            { id: "1", name: "BathroomWall T-shirt" },
            { id: "2", name: "Daisy Baby Shop" },
            { id: "3", name: "DB3 Online" },
            { id: "4", name: "Dead Good Undies" },
            { id: "5", name: "Envie4u" },
            { id: "6", name: "Mega T-shirt store" },
            { id: "7", name: "Nazz Collection" },
            { id: "8", name: "Opera Cambi" },
            { id: "9", name: "Rock n Romance" },
            { id: "10", name: "Snide London" },
          ]}
        />
        <SelectInput
          source="category"
          choices={[
            { id: "Apperal", name: "Gift" },
            { id: "Health", name: "Fashion" },
            { id: "3", name: "Accessories" },
          ]}
        />

        <TextInput source="title" />
        <ImageInput source="image" label="title" accept="image/*"></ImageInput>
        <TextInput source="couponscode" />
        <DateInput source="dealexpire" />
        <TextInput source="dealURL" />
        <BooleanInput source="fetured" />
        <BooleanInput source="dealExclusive" />
        <BooleanInput source="Verified" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Create>
  );
};

export default CouponCreate;
