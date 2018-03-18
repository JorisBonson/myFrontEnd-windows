
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';
import { CreateReviewComponent } from './create-review/create-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhereWeAreComponent } from './where-we-are/where-we-are.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent

  },
  {
    path: 'login', component: LoginComponent, data: { title: 'Log In' }
  },
  {
    path: 'logout', component: LoginComponent, data: { title: 'Log out' }
  },
  {path: 'register', component: RegisterComponent, data : {title : 'register'}

  },
  {path: 'createreview', component: CreateReviewComponent, data : {title : 'Create Review'}

  },
  {
    path: 'editreview/:id', component: EditReviewComponent, data: { title: 'Edit Review' }
  },
  {
    path: 'myreviews', component: MyReviewsComponent, data: { title: 'My Reviews' }
  },
  {path: 'myprofile', component: EditUserProfileComponent, data : {title : 'My Profile'}

  },
  {path: 'createadmin', component: CreateAdminComponent, data : {title : 'Create Administrator'}

  },
  {
    path: 'usermanager', component: UserManagementComponent, data: { title: 'User Management' }
  },
  {
    path: 'aboutus', component: AboutUsComponent, data: { title: 'About Us' }
  },
  {path: 'contactus', component: ContactUsComponent, data : {title : 'Contact Us'}

  },
  {path: 'wheretofindus',  component: WhereWeAreComponent, data : {title : 'Where to find us'}

  },
  {path: 'admindashboard',  component: AdminDashboardComponent, data : {title : 'Where to find us'}

  },
  {path: 'film-details/: id',  component: AdminDashboardComponent, data : {title : 'Where to find us'}

  }
  ];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
