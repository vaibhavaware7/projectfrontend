import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NgModel, FormsModule,NgForm} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { PolicehomeComponent } from './police/policehome/policehome.component'
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { NgoComponent } from './ngo/ngo/ngo.component';
import { AdminComponent } from './admin/admin.component';
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
    PoliceinboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"police",component:PolicehomeComponent},
      {path:"ngo",component:NgoComponent},
      {path:"admin",component:AdminComponent},
      {path:"policereg",component:PolicregComponent},
      {path:"ngoreg",component:NgoregComponent},
      {path:"gallery",component:GalleryComponent},
      {path:"stat",component:StatComponent},
      {path:"org",component:OrgComponent},
      {path:"about",component:AboutusComponent},
      {path:"regcase",component:RegcaseComponent},
      {path:"cases",component:CasesComponent},
      {path:"search",component:SearchComponent},
      {path:"policeinbox",component:PoliceinboxComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
