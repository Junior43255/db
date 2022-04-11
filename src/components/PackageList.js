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
    SimpleFormIterator,
    ArrayInput,
    Create,
    Filter,
    ReferenceInput,
    SelectInput,
    required,
    NumberInput,
    ArrayField,
    SingleFieldList,
    ChipField
} from 'react-admin'

const PackageTitle = ({ record }) => {
    return <span>Package {record ? `'${record.title}'` : ''}</span>
}

const PackageFilter = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwayOn />
        <ReferenceInput label='Package' source="id" reference="packages" allowEmpty>
            <SelectInput optionText="title" />
        </ReferenceInput>
    </Filter>
)

export const PackageList = props => (
    <List {...props} filters={<PackageFilter />} bulkActionButtons={false}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="price" />
            <TextField source="quality" />
            <ArrayField source="deviceView" >
            <SingleFieldList>
                <ChipField source='device'/>
            </SingleFieldList>
            </ArrayField>
            <EditButton basePath='/packages' />
            {/* <DeleteButton basePath='/packages' /> */}
        </Datagrid>
    </List>
);

export const PackageEdit = props => (
    <Edit title={<PackageTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source="title" validate={required()} />
            <TextInput source="price" validate={required()} />
            <TextInput source="quality" validate={required()} />
            <ArrayInput source='deviceView' validate={required()}>
                <SimpleFormIterator>
                    <TextInput label='อุปกรณ์ที่ใช้ดู'  source='device' validate={required()}/>
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput source='screenAmount' validate={required()}/>
        </SimpleForm>
    </Edit>
)

export const PackageCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <TextInput source="price" validate={required()} />
            <TextInput source="quality" validate={required()} />
            <ArrayInput label='อุปกรณ์ที่ใช้ดู' source='deviceView' validate={required()}>
                <SimpleFormIterator>
                    <TextInput label='เพิ่มอุปกรณ์'  source='device' validate={required()}/>
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput source='screenAmount' validate={required()}/>
        </SimpleForm>
    </Create>
)