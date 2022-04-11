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
    ImageField,
    ImageInput,
    ShowButton,
    required
} from 'react-admin'

const HomeBannerTitle = ({ record }) => {
    return <span>HomeBanner {record ? `'${record.title}'` : ''}</span>
}

const HomeBannerFilter = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwayOn />
        <ReferenceInput label='HomeBanner' source="id" reference="homeBanners" allowEmpty>
            <SelectInput optionText="title" />
        </ReferenceInput>
    </Filter>
)

export const HomeBannerList = props => (
    <List {...props} filters={<HomeBannerFilter />} bulkActionButtons={false}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <EditButton basePath='/homeBanners' />
            <ShowButton basePath='/homeBanners' />
            {/* <DeleteButton basePath='/homeBanners' /> */}
        </Datagrid>
    </List>
);

export const HomeBannerEdit = props => (
    <Edit title={<HomeBannerTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source="title" validate={required()} />
            <TextInput multiline source='description' validate={required()} />
            <ImageInput label='Banner background ' source='bg' accept="image/*" validate={required()}>
                <ImageField source='src' title='title' />
            </ImageInput>
        </SimpleForm>
    </Edit>
)

export const HomeBannerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <TextInput multiline source='description' validate={required()} />
            <ImageInput label='Banner background ' source='bg' accept="image/*" validate={required()}>
                <ImageField source='src' title='title' />
            </ImageInput>
        </SimpleForm>
    </Create>
)

export const HomeBannerShow = props => (
    <Show title={<HomeBannerTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <ImageField label='Banner background ' source='bg.src' title='bg.title' />
        </SimpleShowLayout>
    </Show>
);