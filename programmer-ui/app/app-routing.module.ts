import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }   from './default.component';
import { TemplateDesignerMain }   from './design/designer-main.component';
import { TemplateDeployerMain }      from './deploy/deployer-main.component';
import { TemplateMonitorMain }  from './monitor/monitor-main.component';

const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  { path: 'default',  component: MainComponent },
  { path: 'deployer',  component: TemplateDeployerMain },
  { path: 'designer', component: TemplateDesignerMain },
  { path: 'monitor',     component: TemplateMonitorMain }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}