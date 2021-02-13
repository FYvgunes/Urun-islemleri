import Home from "./component/Home";
import User from "./component/user/user";
import UserStart from "./component/user/UserStart";
import UserEdit from "./component/user/UserEdit";
import UserDetails from "./component/user/userdetails";

export const routes = [
  {path:'/',component:Home, name:'anasayfa'},
  {path:'/user',component:User , name:'kullanıcı',children:[
      {path:'',component:UserStart},   //  /user
      {path:':id',component:UserDetails, beforeEnter:(to,from,next) =>{
        console.log("route seviyesinde kontrol");
          next(false);
        }},   //  /user/12
      {path:':id/edit',component:UserEdit, name:"useredit"}   //  /user/12/edit
    ]
  }, //user/deneme bs id vs örnek yapara
  {path:"/redirect", redirect:'/user'},
  {path:'*' ,redirect: "/"}
]
