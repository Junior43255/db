import * as React from 'react'
import { 
    List, 
    Datagrid, 
    TextField, 
    Edit,
    EditButton,
    DeleteButton,
    SimpleForm,
    TextInput,
    Show, 
    SimpleShowLayout,
    RichTextField,
    Create,
    Filter,
    ReferenceInput,
    SelectInput,
    required
} from 'react-admin'

const CategoryTitle = ({ record }) => {
    return <span>Category {record ? `'${record.category}'` : ''}</span>
}

const CategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwayOn />
        <ReferenceInput label='Category' source="id" reference="categories" allowEmpty>
            <SelectInput optionText="category" />
        </ReferenceInput>
    </Filter>
)

export const CategoryList = props => (
    <List {...props} filters={<CategoryFilter />} bulkActionButtons={false}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="category" />
            <EditButton basePath='/categories'/>
            {/* <DeleteButton basePath='/categories' /> */}
        </Datagrid>
    </List>
);

export const CategoryEdit = props => (
    <Edit title={<CategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source="category" validate={required()}/>
        </SimpleForm>
    </Edit>
)

export const CategoryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="category" validate={required()}/>
        </SimpleForm>
    </Create>
)