import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViewPostPage } from '../pages/view-post/view-post';
import { AddPostPage } from '../pages/add-post/add-post';
import { AddCommentPage } from '../pages/add-comment/add-comment';
import { Data } from '../providers/data';
import { Posts } from '../providers/posts';
import { Comments } from '../providers/comments';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ViewPostPage,
    AddPostPage,
    AddCommentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ViewPostPage,
    AddPostPage,
    AddCommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    Posts,
    Comments
  ]
})
export class AppModule {}
