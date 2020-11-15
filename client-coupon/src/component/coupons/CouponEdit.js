import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  ImageField,
  ImageInput,
  DateInput,
} from "react-admin";
const CouponEdit = (props) => {
  return (
    <Edit title="Edit a Forum & Categories" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
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
        <ImageInput source="image" accept="image/*"></ImageInput>
        <TextInput source="couponscode" />
        <TextInput source="dealURL" />
        <DateInput source="dealexpire" />
        <BooleanInput source="fetured" />
        <BooleanInput source="dealExclusive" />
        <BooleanInput source="Verified" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default CouponEdit;
