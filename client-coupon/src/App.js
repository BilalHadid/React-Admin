import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./component/PostList";
import PostCreate from "./component/PostCreate";
import PostEdit from "./component/PostEdit";
import UserList from "./component/UserList";
import UserCreate from "./component/UserCreate";
import UserEdit from "./component/UserEdit";
import Dashbord from "./component/Dashbord";
import NetworkList from "./component/NetworkList";
import NetworkCreate from "./component/NetworkCreate";
import NetworkEdit from "./component/NetworkEdit";
import EventList from "./component/EventList";
import EventEdit from "./component/EventEdit";
import EventCreate from "./component/EventCreate";
import StoreList from "./component/store/StoreList";
import StoreCreate from "./component/store/StoreCreate";
import StoreEdit from "./component/store/StoreEdit";
import ForumCreate from "./component/forum/ForumCreate";
import ForumEdit from "./component/forum/ForumEdit";
import ForumList from "./component/forum/ForumList";
import CouponList from "./component/coupons/CouponList";
import CouponCreate from "./component/coupons/CouponCreate";
import CouponEdit from "./component/coupons/CouponEdit";
import DiscussionList from "./component/discussion/DiscussionList";
import DiscussionCreate from "./component/discussion/DiscussionCreate";
import DiscussionEdit from "./component/discussion/DiscussionEdit";

function App() {
  return (
    <Admin
      dashboard={Dashbord}
      dataProvider={restProvider("http://localhost:3000")}
    >
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />

      <Resource
        name="networks"
        list={NetworkList}
        create={NetworkCreate}
        edit={NetworkEdit}
      />
      <Resource
        name="Events"
        list={EventList}
        create={EventCreate}
        edit={EventEdit}
      />
      <Resource
        name="Store"
        list={StoreList}
        create={StoreCreate}
        edit={StoreEdit}
      />
      <Resource
        name="forumcategory"
        list={ForumList}
        create={ForumCreate}
        edit={ForumEdit}
      />
      <Resource
        name="CouponDeal"
        list={CouponList}
        create={CouponCreate}
        edit={CouponEdit}
      />
      <Resource
        name="discussion"
        list={DiscussionList}
        create={DiscussionCreate}
        edit={DiscussionEdit}
      />
      <Resource
        name="Comments"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="Blog"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="FAQ"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="Pages"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="Home Banner"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="Setting"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
