import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Education',
    route: '/#',
    icon: 'cil-home',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard v.1',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard v.2',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard v.3',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Analytics',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Widgets',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Event',
    to: '/',
    icon: <CIcon name="cil-calendar" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: '',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Professors',
    route: '/professor',
    icon: 'cil-people',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Professors',
        to: '/professor/AllProfessor',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Professors',
        to: '/professor/AddProfessor',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit Professors',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'professors profile',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Students',
    route: '/',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Students',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Student',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit Student',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Student profile',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Courses',
    route: '/',
    icon: 'cil-file',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Courses',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Course',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit Course',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Course Info',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Course payment',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Library',
    route: '/',
    icon: 'cilPencil',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Library Assets',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Library Asset',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit Library Asset',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Student profile',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Departments',
    route: '/',
    icon: 'cilPencil',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Departments List',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Departments',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit Departments',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Mail Box',
    route: '/',
    icon: 'cil-pencil',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Inbox',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Mail',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Compose Mail',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Interface',
    route: '/',
    icon: 'cil-home',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Google Maps',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Data Maps',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pdf Viewer',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'X-Editable',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Code Editor',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tree View',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Preloader',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Image Croppper',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Charts',
    route: '/',
    icon: 'cil-home',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Bar Charts',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Line Charts',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Area Charts',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Rounded Charts',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'C3 Charts',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sparkline Charts',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Piety Charts',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Data Tables',
    route: '/',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Static Table',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Data Table',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Form Elements',
    route: '/',
    icon: 'cil-home',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Bc Form Elements',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ad Form Elements',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Password Meter',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Multi Upload',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Text Editor',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dual List Box',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'App Views',
    route: '/',
    icon: 'cil-home',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Notifications',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modals',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tabs',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Accordion',
        to: '/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/',
    icon: 'cil-home',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Lock',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Password recovery',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '404 Page',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '500 Page',
        to: '/',
      },
    ],
  },
]

export default _nav
