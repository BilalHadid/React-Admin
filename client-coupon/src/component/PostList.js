import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageField,
  BooleanField,
  Filter,
  SearchInput,
  AutocompleteInput,
  ReferenceInput,
  TextInput,
  NullableBooleanInput,
} from "react-admin";
import "./user.css";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput source="title" />
  </Filter>
);
// const MyFilter = (props) => (
//   <Filter {...props}>
//     {/* <ReferenceInput
//       label="Search"
//       source="title"
//       reference="posts"
//       sort={{ field: "title", order: "ASC" }}
//       filterToQuery={(searchText) => ({ title: searchText })}
//       allowEmpty={true}
//       alwaysOn
//     >
//       <AutocompleteInput optionText="title" />
//     </ReferenceInput> */}
//     <TextInput label="Search" source="q" alwaysOn />
//     <AutocompleteInput optionText="title" />
//   </Filter>
// );

const PostList = (props) => {
  return (
    <List
      {...props}
      filters={<PostFilter />}
      // sort={{ field: "id", order: "DESC" }}
    >
      <Datagrid>
        <TextField source="id" />
        {/* <ImageField source="image" title="images" className="thumbNail" /> */}
        <TextField source="title" />
        <TextField source="icon" />

        <BooleanField source="status" />
        <EditButton basePath="/posts" label="Edit" />
        <DeleteButton basePath="/posts" label="Delete" />
      </Datagrid>
    </List>
  );
};

export default PostList;
