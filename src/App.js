import React, { useEffect } from 'react'
import { Admin, Resource } from 'react-admin'
import { InstructorCreate, InstructorEdit, InstructorList } from './components/InstructorList'
import { CourseList, CourseEdit, CourseCreate, CourseShow } from './components/CourseList'
import { CategoryCreate, CategoryEdit, CategoryList } from './components/CategoryList'

import jsonServerProvider from 'ra-data-json-server'
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from 'react-admin-firebase'
// import firebaseDataProvider from 'ra-data-firebase-client'
// import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/database";

import DashBoard from './components/DashBoard'
import AuthProvider from './Auth/AuthProvider'

import CourseIcon from '@material-ui/icons/School'
import InstructorIcon from '@material-ui/icons/Group'
import CategoryIcon from '@material-ui/icons/Category'
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors'
import { PackageCreate, PackageEdit, PackageList } from './components/PackageList'
import { HomeBannerCreate, HomeBannerEdit, HomeBannerList, HomeBannerShow } from './components/HomeBannerList'

const config = {
  apiKey: "AIzaSyAnMToRWdzWrBekUrMFIn1crs5NVMsVNes",
  authDomain: "eduplus-demo-3258d.firebaseapp.com",
  databaseURL: "https://eduplus-demo-3258d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eduplus-demo-3258d",
  storageBucket: "eduplus-demo-3258d.appspot.com",
  messagingSenderId: "893149044208",
  appId: "1:893149044208:web:72363992eb733a029e5135",
  measurementId: "G-15L799C8FJ"
}

const authProvider = FirebaseAuthProvider(config)

// const dataProvider = jsonServerProvider('http://localhost:3004')
const dataProvider = FirebaseDataProvider(config)

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
      authProvider={authProvider}
      dashboard={DashBoard}
      dataProvider={dataProvider}
      // customSagas={[firebaseRealtime]}
      // theme={customTheme}
    >
      {role => [

        <Resource
          name='instructors'
          list={InstructorList}
          edit={InstructorEdit}
          create={InstructorCreate}
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
          edit={CategoryEdit}
          create={CategoryCreate}
          icon={CategoryIcon}
        />,
        <Resource
          name='packages'
          list={PackageList}
          edit={PackageEdit}
          create={PackageCreate}
        />,
        <Resource
          name='homeBanners'
          list={HomeBannerList}
          edit={HomeBannerEdit}
          create={HomeBannerCreate}
          show={HomeBannerShow}
        />

      ]}
    </Admin>
  )
}


export default App;
