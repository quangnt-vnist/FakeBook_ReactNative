// import Register from './register';

import { MainContainer } from './main-content'
import { NewFeed } from './new-feed'
import { FriendRequestTab } from './friend-request-tab'
import { WatchTab } from './watchs-tab'
import { NotificationTab } from './notification-tab'
import { OptionTab } from './option-tab'

import { LoginNewAccount } from './auth/login/loginNewAccount'
import { LoginRecentlyAcc } from './auth/login/loginRecentlyAcc'
import Welcome from './auth/login/welcome'

import { StartCreateAcc } from './auth/sign-up/StartCreateAcc'
import { Birthday } from './auth/sign-up/Birthday'
import { Name } from './auth/sign-up/Name'
import { Password } from './auth/sign-up/Password'
import { PhoneNumber } from './auth/sign-up/PhoneNumber'
import { Policy } from './auth/sign-up/Policy'
import { ConfirmAcc } from './auth/sign-up/ConfirmAcc'
import { Remind } from './auth/sign-up/Remind'
import { Remember } from './auth/sign-up/Remember'
import { CreatePost } from './post/create-post'
import { Feeling } from './post/feeling'
import { Activity } from './post/activity'
import { Feeling_Activity } from './post/feeling_activity'

import { Comments } from './comment/comments'
//Profile
import { Profile } from './profile/index';
import { PreViewAvatar } from './profile/previewAvatar';

// friends tab
import { AllRequest } from './friend-request-tab/allRequest';
import { SuggestFriend } from './friend-request-tab/suggestFriend';
import { ListFriends } from './friend-request-tab/listFriends';

// watch tab
import ViewVideo from "./watchs-tab/viewVideo";

// report
import { ReportPost } from './report';
import { ConfirmReport } from './report/confirmReport';

// search page
import { SearchPage } from './search-bar-common'


export {
    MainContainer,
    NewFeed,
    FriendRequestTab,
    WatchTab,
    NotificationTab,
    OptionTab,

    // Friend Tab
    AllRequest,
    SuggestFriend,
    ListFriends,

    // watch 
    ViewVideo,

    // Login
    LoginNewAccount,
    LoginRecentlyAcc,
    Welcome,

    // Create new account
    StartCreateAcc,
    Birthday,
    Name,
    Password,
    PhoneNumber,
    Policy,
    ConfirmAcc,
    Remind,
    Remember,

    //Comments
    Comments,

    //create post
    CreatePost,
    Feeling,
    Activity,
    Feeling_Activity,

    // profile
    Profile,
    PreViewAvatar,

    // report post
    ReportPost,
    ConfirmReport,

    // search
    SearchPage,

}