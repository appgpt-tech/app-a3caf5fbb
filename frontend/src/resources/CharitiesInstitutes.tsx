//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const CharitiesInstitutesTitle = () => {
  const record = useRecordContext();
  return (
    <span>
      CharitiesInstitutes {record ? `"${record.organisationName}"` : ''}
    </span>
  );
};

export const CharitiesInstitutesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="address" />
      <TextField source="organisationName" />
      <TextField source="description" />
      <TextField source="locations" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const CharitiesInstitutesEdit = () => (
  <Edit title={<CharitiesInstitutesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="address" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="organisationName" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="locations" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const CharitiesInstitutesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="address" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="organisationName" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="locations" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
];
