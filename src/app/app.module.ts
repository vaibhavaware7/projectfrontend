import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NgModel, FormsModule,NgForm} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { PolicehomeComponent } from './police/policehome/policehome.component'
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service'
import { NgoComponent } from './ngo/ngo/ngo.component';
import { AdminComponent } from './admin/admin/admin.component';
import { PolicregComponent } from './police/policreg/policreg.component';
import { NgoregComponent } from './ngo/ngoreg/ngoreg.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { StatComponent } from './home/stat/stat.component';
import { OrgComponent } from './home/org/org.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { RegcaseComponent } from './police/regcase/regcase.component';
import { CasesComponent } from './police/cases/cases.component';
import { SearchComponent } from './police/search/search.component';
import { PoliceinboxComponent } from './police/policeinbox/policeinbox.component';
import { NgoinboxComponent } from './ngo/ngoinbox/ngoinbox.component';
import { UsersComponent } from './admin/users/users.component';
import { AdduserComponent } from './admin/adduser/adduser.component';
import { AdmininboxComponent } from './admin/admininbox/admininbox.component';
import { PoliceComponent } from './police/police/police.component';
import { PolicecomposeComponent } from './police/policecompose/policecompose.component';
import { NgolistComponent } from './police/ngolist/ngolist.component';
import { UpdatepoliceComponent } from './police/updatepolice/updatepolice.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AllcasesComponent } from './admin/allcases/allcases.component';
import { SearchpcComponent } from './admin/searchpc/searchpc.component';
import { AdmincomposeComponent } from './admin/admincompose/admincompose.component';
import { AddngpoComponent } from './admin/addngpo/addngpo.component';
import { RequestComponent } from './admin/request/request.component';
import { SearchuserComponent } from './admin/searchuser/searchuser.component';
import { NgohomeComponent } from './ngo/ngohome/ngohome.component';
import { NgcasesComponent } from './ngo/ngcases/ngcases.component';
import { NgsearchComponent } from './ngo/ngsearch/ngsearch.component';
import { NgusersComponent } from './ngo/ngusers/ngusers.component';
import { NgocomposeComponent } from './ngo/ngocompose/ngocompose.component';
import { NgupdateComponent } from './ngo/ngupdate/ngupdate.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PolicehomeComponent,
    NgoComponent,
    AdminComponent,
    PolicregComponent,
    NgoregComponent,
    GalleryComponent,
    StatComponent,
    OrgComponent,
    AboutusComponent,
    RegcaseComponent,
    CasesComponent,
    SearchComponent,
    PoliceinboxComponent,
    NgoinboxComponent,
    UsersComponent,
    AdduserComponent,
    AdmininboxComponent,
    PoliceComponent,
    PolicecomposeComponent,
    NgolistComponent,
    UpdatepoliceComponent,
    AdminhomeComponent,
    AllcasesComponent,
    SearchpcComponent,
    AdmincomposeComponent,
    AddngpoComponent,
    RequestComponent,
    SearchuserComponent,
    NgohomeComponent,
    NgcasesComponent,
    NgsearchComponent,
    NgusersComponent,
    NgocomposeComponent,
    NgupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"policehome",component:PolicehomeComponent},
      {path:"ngo",component:NgoComponent},
      {path:"admin",component:AdminComponent},
      { path:'policereg',component:PolicregComponent},
      { path:'ngoreg',component:NgoregComponent},
      {
        path:'',component:HomeComponent
      },
      
      {
      path:'gallery',component:GalleryComponent},
      {
        path:'stat',component:StatComponent},
      {
      path:'org',component:OrgComponent},
      {
      path:'about',component:AboutusComponent},
      {
        path:'policehome',component:PolicehomeComponent,children:[{path:'police',component:PoliceComponent}]  
      },
      {
        path:'policehome',component:PolicehomeComponent,children:[{path:'regcase',component:RegcaseComponent}]  
      },
      {
        path:'policehome',component:PolicehomeComponent,children:[{path:'cases',component:CasesComponent}]  
      },
      {
        path:'policehome',component:PolicehomeComponent,children:[{path:'search',component:SearchComponent}]  
      }, 
      {
        path:'policehome',component:PolicehomeComponent,children:[{path:'inbox',component:PoliceinboxComponent}]  
      }, 
      {
        path:'policehome',component:PolicehomeComponent,children:[{path:'ngolist',component:NgolistComponent}]  
      },
      {
        path:'policehome',component:PolicehomeComponent,children:[{path:'compose',component:PolicecomposeComponent}]  
      },
      {
        path:'policehome',component:PolicehomeComponent,children:[{path:'updatepolice',component:UpdatepoliceComponent}]  
      },
      {
        path:'admin',component:AdminComponent,children:[{path:'adminhome',component:AdminhomeComponent}]  
      },
      {
        path:'admin',component:AdminComponent,children:[{path:'users',component:UsersComponent}]  
      },
      {
        path:'admin',component:AdminComponent,children:[{path:'allcases',component:AllcasesComponent}]  
      },
      {
        path:'admin',component:AdminComponent,children:[{path:'adduser',component:AdduserComponent}]  
      },

      {
        path:'admin',component:AdminComponent,children:[{path:'searchpc',component:SearchpcComponent}]  
      },
      {
        path:'admin',component:AdminComponent,children:[{path:'admininbox',component:AdmininboxComponent}]  
      },
      {
        path:'admin',component:AdminComponent,children:[{path:'admincompose',component:AdmincomposeComponent}]  
      },
      {
        path:'admin',component:AdminComponent,children:[{path:'addngpo',component:AddngpoComponent}]  
      },
      {
        path:'admin',component:AdminComponent,children:[{path:'requests',component:RequestComponent}]  
      },
      {
        path:'admin',component:AdminComponent,children:[{path:'searchuser',component:SearchuserComponent}]  
      },
      {
        path:'ngo',component:NgoComponent,children:[{path:'ngoinbox',component:NgoinboxComponent}]  
      },
      {
        path:'ngo',component:NgoComponent,children:[{path:'ngohome',component:NgohomeComponent}]  
      },
      {
        path:'ngo',component:NgoComponent,children:[{path:'ngcases',component:NgcasesComponent}]  
      },
      {
        path:'ngo',component:NgoComponent,children:[{path:'ngsearch',component:NgsearchComponent}]  
      },
      {
        path:'ngo',component:NgoComponent,children:[{path:'ngusers',component:NgusersComponent}]  
      },
      {
        path:'ngo',component:NgoComponent,children:[{path:'ngocompose',component:NgocomposeComponent}]  
      },
      {
        path:'ngo',component:NgoComponent,children:[{path:'ngupdate',component:NgupdateComponent}]  
      },
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
