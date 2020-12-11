// import Register from './register';

import { MainContainer } from './main-content'
import { NewFeed } from './new-feed'
import { FriendRequestTab } from './friend-request-tab'
import { WatchTab } from './watchs-tab'
import { NotificationTab } from './notification-tab'
import { OptionTab } from './option-tab'

import { LoginNewAccount } from './login/loginNewAccount'
import { LoginRecentlyAcc } from './login/loginRecentlyAcc'

import { StartCreateAcc } from './sign-up/StartCreateAcc'
import { Birthday } from './sign-up/Birthday'
import { Name } from './sign-up/Name'
import { Password } from './sign-up/Password'
import { PhoneNumber } from './sign-up/PhoneNumber'
import { Policy } from './sign-up/Policy'
import { ConfirmAcc } from './sign-up/ConfirmAcc'
import { Remind } from './sign-up/Remind'
import { Remember } from './sign-up/Remember'
import { CreatePost } from './post/create-post'
import { Feeling } from './post/feeling'
import { Activity } from './post/activity'
import { Feeling_Activity } from './post/feeling_activity'

import { Comments } from './comment/comments'

import { Profile } from './profile/index';

// friends tab
import { AllRequest } from './friend-request-tab/allRequest';
import { SuggestFriend } from './friend-request-tab/suggestFriend';
import { ListFriends } from './friend-request-tab/listFriends';

// report
import { ReportPost } from './report';
import { ConfirmReport } from './report/confirmReport';


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

    // Login
    LoginNewAccount,
    LoginRecentlyAcc,

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

    // report post
    ReportPost,
    ConfirmReport,

}