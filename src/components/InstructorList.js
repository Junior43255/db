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
    Create,
    Filter,
    ReferenceInput,
    SelectInput,
    ImageInput,
    ImageField,
    required
} from 'react-admin'

const InstructorTitle = ({ record }) => {
    return <span>Instructor {record ? `'${record.name}'` : ''}</span>
}

const InstructorFilter = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwayOn />
        <ReferenceInput label='Instructor' source="id" reference="instructors" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)

export const InstructorList = props => (
    <List {...props} filters={<InstructorFilter />} bulkActionButtons={false}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="tag" />
            <EditButton basePath='/instructors'/>
            {/* <DeleteButton basePath='/instructors' /> */}
        </Datagrid>
    </List>
);

export const InstructorEdit = props => (
    <Edit title={<InstructorTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source="name" validate={required()}/>
            <TextInput label="Profile" multiline source="description" validate={required()}/>
            <TextInput source="tag" validate={required()}/>
            <ImageInput label='Profile Picture' source='profilePicture' accept="image/*" validate={required()}>
                <ImageField source='src' title='title' />
            </ImageInput>
        </SimpleForm>
    </Edit>
)

export const InstructorCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
            <TextInput label="Profile" multiline source="description" validate={required()}/>
            <TextInput source="tag" validate={required()}/>
            <ImageInput label='Profile Picture' source='profilePicture' accept="image/*" validate={required()}>
                <ImageField source='src' title='title' />
            </ImageInput>
        </SimpleForm>
    </Create>
)