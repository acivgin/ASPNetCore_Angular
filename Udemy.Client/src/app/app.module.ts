import { AuthGuard } from "./_guards/auth.guard";
import { AuthService } from "./_services/auth.service";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule, TabsModule } from "ngx-bootstrap";
import { RouterModule } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { NgxGalleryModule } from "ngx-gallery";
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MemberCardComponent } from "./members/member-list/member-card/member-card.component";
import { MemberDetailComponent } from "./members/member-list/member-detail/member-detail.component";
import { MemberEditComponent } from "./members/member-list/member-edit/member-edit.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { appRoutes } from "./routes";
import { UserService } from "./_services/user.service";
import { AlertifyService } from "./_services/alertify.service";
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/member-list/photo-editor/photo-editor.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ["localhost:5001"],
        blacklistedRoutes: ["localhost:5001/api/auth"]
      }
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    PreventUnsavedChanges,
    UserService,
    AlertifyService,
    ErrorInterceptorProvider,
    MemberDetailResolver,
    MemberListResolver,
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    MemberEditResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
