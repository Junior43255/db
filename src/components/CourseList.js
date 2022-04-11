import * as React from 'react'
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    SelectInput,
    Create,
    Filter,
    SimpleList,
    Show,
    SimpleShowLayout,
    RichTextField,
    TopToolbar,
    DeleteButton,
    ShowButton,
    DateInput,
    ImageInput,
    required,
    ImageField,
    FileInput,
    FileField,
    NullableBooleanInput,
    FunctionField,
    UrlField,
    ChipField,
    ArrayInput,
    SimpleFormIterator,
    ArrayField,
    SingleFieldList
} from 'react-admin'

import Pagination from './Pagination'
import { useMediaQuery } from '@material-ui/core'
import { unstable_Box as Box } from '@material-ui/core/Box'

const CourseTitle = ({ record }) => {
    return <span>Course {record ? `'${record.title}'` : ''}</span>
}

const CourseFilter = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwayOn />
        <ReferenceInput label='Instructor' source="instructorId" reference="instructors" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="categoryId" reference="categories">
            <SelectInput optionText="category" />
        </ReferenceInput>
    </Filter>
)

export const CourseList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
    return (
        <List filters={<CourseFilter />} {...props} pagination={<Pagination />}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={
                        <ReferenceField source="categoryId" reference="categories">
                            <TextField source="category" />
                        </ReferenceField>
                    }
                    tertiaryText={record => new Date(record.publishedAt).toLocaleDateString()}
                />
            ) : (
                <Datagrid>Lorem ipsum dolor sit amet.
                    <TextField source="id" />
                    <ReferenceField source="instructorId" reference="instructors">
                        <ChipField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <ReferenceField source="categoryId" reference="categories">
                        <ChipField source="category" />
                    </ReferenceField>
                    <TextField source='publishedAt' />
                    <EditButton basePath='/courses' />
                    <ShowButton basePath='/courses' />
                    {/* <DeleteButton basePath='/courses' /> */}
                </Datagrid>
            )
            }

        </List>
    )
}

export const CourseEdit = props => (
    <Edit title={<CourseTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <ReferenceInput source="instructorId" reference="instructors">
                <SelectInput source="name" />
            </ReferenceInput>
            <TextInput source="title" validate={required()} />
            <TextInput label='คอร์สนี้เหมาะกับใคร' multiline source='suitableCourse' validate={required()}/>
            <TextInput label='สิ่งที่คุณจะได้จากคอร์สนี้' multiline source='willgetCourse' validate={required()} />
            <TextInput label="เนื้อหาสำคัญในบทเรียน" multiline source="description" validate={required()} />
            <TextInput source="keyword" validate={required()} />
            <ReferenceInput source="categoryId" reference="categories" validate={required()}>
                <SelectInput optionText="category" />
            </ReferenceInput>
            <ArrayInput source='courseChapter'>
                <SimpleFormIterator>
                    <TextInput label='Title' source='title' />
                    <TextInput label='Vimeo Link' source='vimeoLink' />
                    <FileInput label='ไฟล์แบบฝึกหัด' source='exerciseFile'>
                        <FileField source="src" title="title" />
                    </FileInput>
                    <FileInput label='ไฟล์ประกอบการเรียน' source='courseFile' accept="application/pdf">
                        <FileField source="src" title="title" />
                    </FileInput>
                </SimpleFormIterator>
            </ArrayInput>
            <NullableBooleanInput
                label="Course Type"
                source="courseType"
                falseLabel="Free"
                trueLabel="Member"
                validate={required()}
            />
            <DateInput label='Published' source='publishedAt' validate={required()} />
            <ImageInput label='Cover 1920x1080' source='coverPhotoLarge' accept="image/*" validate={required()}>
                <ImageField source='src' title='title' />
            </ImageInput>
            <ImageInput label='Cover 1000x1500' source='coverPhotoMedium' accept="image/*" validate={required()}>
                <ImageField source='src' title='title' />
            </ImageInput>
            <TextInput source="vimeoLink" validate={required()}/>
        </SimpleForm>
    </Edit>
)

export const CourseCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="instructorId" reference="instructors" validate={required()}>
                <SelectInput source="name" />
            </ReferenceInput>
            <TextInput source="title" validate={required()} />
            <TextInput label='คอร์สนี้เหมาะกับใคร' multiline source='suitableCourse' validate={required()} />
            <TextInput label='สิ่งที่คุณจะได้จากคอร์สนี้' multiline source='willgetCourse' validate={required()} />
            <TextInput label="เนื้อหาสำคัญในบทเรียน" multiline source="description" validate={required()} />
            <TextInput source="keyword" validate={required()} />
            <ReferenceInput source="categoryId" reference="categories" validate={required()}>
                <SelectInput optionText="category" />
            </ReferenceInput>
            <ArrayInput source='courseChapter'>
                <SimpleFormIterator>
                    <TextInput label='Title' source='title' />
                    <TextInput label='Vimeo Link' source='vimeoLink' />
                    <FileInput label='ไฟล์แบบฝึกหัด' source='exerciseFile'>
                        <FileField source="src" title="title" />
                    </FileInput>
                    <FileInput label='ไฟล์ประกอบการเรียน' source='courseFile' accept="application/pdf" >
                        <FileField source="src" title="title" />
                    </FileInput>
                </SimpleFormIterator>
            </ArrayInput>
            <NullableBooleanInput
                label="Course Type"
                source="courseType"
                falseLabel="Free"
                trueLabel="Member"
                validate={required()}
            />
            <DateInput label='Published' source='publishedAt' validate={required()} />
            <ImageInput label='Cover 1920x1080' source='coverPhotoLarge' accept="image/*" validate={required()}>
                <ImageField source='src' title='title' />
            </ImageInput>
            <ImageInput label='Cover 1000x1500' source='coverPhotoMedium' accept="image/*" validate={required()}>
                <ImageField source='src' title='title' />
            </ImageInput>
            <TextInput source="vimeoLink" validate={required()} />
        </SimpleForm>
    </Create>
)

export const CourseShow = (props) => (
    <Show title={<CourseTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="instructorId" reference="instructors">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField label='คอร์สนี้เหมาะกับใคร' source='suitableCourse' />
            <TextField label='สิ่งที่คุณจะได้จากคอร์สนี้' source="willgetCourse" />
            <TextField label="เนื้อหาสำคัญในบทเรียน" source="description" />
            <TextField source='keyword' />
            <ReferenceField source="categoryId" reference="categories">
                <TextField source="category" />
            </ReferenceField>
            <ArrayField source='courseChapter'>
                <Datagrid>
                    <TextField source='title' />
                    <UrlField source='vimeoLink' />
                    <FileField label='ไฟล์แบบฝึกหัด' source='exerciseFile.src' title='exerciseFile.title' />
                    <FileField label='ไฟล์ประกอบการเรียน' source='courseFile.src' title='courseFile.title' />
                </Datagrid>
            </ArrayField>
            <FunctionField label='Free/Member' render={record => record.courseType === false ? 'Free' : 'Member'} />
            <TextField source='publishedAt' />
            <ImageField source='coverPhotoLarge.src' title='coverPhotoLarge.title' />
            <ImageField source='coverPhotoMedium.src' title='coverPhotoMedium.title' />
            <UrlField source='vimeoLink' />
        </SimpleShowLayout>
    </Show>
);