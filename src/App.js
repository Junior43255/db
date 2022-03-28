import React, { useEffect } from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { InstructorCreate, InstructorEdit, InstructorList } from './components/InstructorList'
import { CourseList, CourseEdit, CourseCreate, CourseShow } from './components/CourseList'
import DashBoard from './components/DashBoard'
import AuthProvider from './Auth/AuthProvider'

import CourseIcon from '@material-ui/icons/School'
import InstructorIcon from '@material-ui/icons/Group'
import CategoryIcon from '@material-ui/icons/Category'
import { CategoryCreate, CategoryEdit, CategoryList } from './components/CategoryList'
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors'


const dataProvider = jsonServerProvider('http://localhost:3004')

const customTheme = createTheme({
  // ...defaultTheme,
  ...{
    palette: {
      type: 'dark',
      primary: green,
      secondary: green,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }
  }
});




function App() {
  // useEffect(() => {
  //   document.title = "Eduplus Admin"
  // })
  return (
    <Admin
      authProvider={AuthProvider}
      dashboard={DashBoard}
      dataProvider={dataProvider}
      // theme={customTheme}
    >
      {role => [

        <Resource
          name='instructors'
          list={InstructorList}
          edit={role === 'admin' ? InstructorEdit : null}
          create={role === 'admin' ? InstructorCreate : null}
          icon={InstructorIcon}
        />,
        <Resource
          name='courses'
          list={CourseList}
          show={CourseShow}
          edit={CourseEdit}
          create={CourseCreate}
          icon={CourseIcon}
        />,
        <Resource
          name='categories'
          list={CategoryList}
          edit={role === 'admin' ? CategoryEdit : null}
          create={role === 'admin' ? CategoryCreate : null}
          icon={CategoryIcon}
        />

      ]}
    </Admin>
  )
}


export default App;
