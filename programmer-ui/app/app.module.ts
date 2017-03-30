import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// For Routing
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainComponent } from './default.component';
import { TemplateDesignerMain }   from './design/designer-main.component';
import { TemplateDeployerMain }      from './deploy/deployer-main.component';
import { TemplateMonitorMain }  from './monitor/monitor-main.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, MainComponent, TemplateDesignerMain, TemplateDeployerMain, TemplateMonitorMain ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }