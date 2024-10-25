import Dashboard from 'layouts/dashboard1';
//import Dashboard from 'layouts/dashboard';

import Tables from 'layouts/tables';
import Billing from 'layouts/billing';
import Notifications from 'layouts/notifications';
import SignIn from 'layouts/authentication/sign-in';
import CreateEmployee from 'layouts/createEmployee/CreateEmployee';
import MergeIcon from '@mui/icons-material/Merge';
// @mui icons
import Icon from '@mui/material/Icon';
import { useContext, useEffect } from 'react';
import roleMenuAccessContext from 'context/roleMenuAccess';
import Mapping from 'layouts/mapping';
import Menu from 'layouts/menu';
import EmpIcon from '@mui/icons-material/PersonAdd';
import Role from 'layouts/role';
import RoleIcon from '@mui/icons-material/SensorOccupied';
import Profile from 'layouts/viewprofile/index';
// import Updateform from 'layouts/createEmployee/components/updateform';
// import { getProfile } from "utility/apiService";
// import { getRoleMenuAccessById } from "utility/apiService";

// function onlyUnique(value, index, self) {
//   return self.indexOf(value) === index;
// }

// var a = ['a', 1, 'a', 2, '1'];
// var unique = a.filter(onlyUnique);

// console.log(unique)

let publicRouter = [
     {
          type: 'collapse',
          name: 'Dashboard',
          key: 'dashboard',
          icon: <Icon fontSize='small'>dashboard</Icon>,
          route: '/dashboard',
          component: <Dashboard />,
     },
     {
          icon: <Icon fontSize='small'>login</Icon>,
          route: '/authentication/sign-in',
          component: <SignIn />,
     },
     {
          name: 'Profile',
          key: 'profile',
          icon: <Icon fontSize='small'>person</Icon>,
          route: '/profile',
          component: <Profile />,
     },
];

let route = [
     {
          type: 'collapse',
          name: 'Dashboard',
          key: 'dashboard',
          icon: <Icon fontSize='small'>dashboard</Icon>,
          route: '/dashboard',
          component: <Dashboard />,
     },
     {
          type: 'collapse',
          name: 'Create Employee',
          key: 'createEmployee',
          icon: <Icon fontSize='small'>add</Icon>,
          route: '/createEmployee',
          component: <CreateEmployee />,
     },
     {
        //   type: "collapse",
          name: 'Profile',
          key: 'profile',
          icon: <Icon fontSize='small'>person</Icon>,
          route: '/profile',
          component: <Profile />,
     },
     {
          type: 'collapse',
          name: 'Role',
          key: 'role',
          icon: <RoleIcon fontSize='small'>SensorOccupied</RoleIcon>,
          route: '/role',
          component: <Role />,
     },
     { type: 'collapse', name: 'Menu', key: 'menu', icon: <Icon fontSize='small'>menu</Icon>, route: '/menu', component: <Menu /> },
     {
          type: 'collapse',
          name: 'Mapping',
          key: 'mapping',
          icon: <MergeIcon />,
          route: '/mapping',
          component: <Mapping />,
     },
];

const routes = () => {
     const roleMenu = useContext(roleMenuAccessContext);
     let accessRoute = [];
     publicRouter.map((i) => {
          accessRoute.push(i);
     });
     let admin = [];
     admin = roleMenu.user.roleMenuAccess;
     if (!roleMenu.user.isOwner) {
          admin?.map((i) => {
               route?.map((j) => {
                    if (i.menu?.toLowerCase() == j.name?.toLowerCase()) {
                         accessRoute.push(j);
                    }
               });
          });
     }

     function getUniqueListBy(arr, key) {
          return [...new Map(arr.map((item) => [item[key], item])).values()];
     }

     const unqiueArr = getUniqueListBy(accessRoute, 'name');

     let data = roleMenu.user.isOwner ? route : unqiueArr;
     // localStorage.setItem('route',data)
     // return accessRoute
     return data;
};

export default routes;
