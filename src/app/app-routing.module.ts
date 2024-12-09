import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ArrayComponent } from './array/array.component';
import { BuffetComponent } from './buffet/buffet.component';
import { DirectiveComponent } from './directive/directive.component';
import { EditTitleComponent } from './edit-title/edit-title.component';
import { FormsmoduleComponent } from './formsmodule/formsmodule.component';
import { GetsetComponent } from './getset/getset.component';
import { HomeComponent } from './home/home.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { OutputshoppingComponent } from './outputshopping/outputshopping.component';
import { PrimengComponent } from './primeng/primeng.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';
import { TestRequestGetComponent } from './test-request/test-request-get/test-request-get.component';
import { TwowayComponent } from './twoway/twoway.component';
import { ViewComponent } from './view/view.component';
import { CreatevalidatorComponent } from './createvalidator/createvalidator.component';
import { StyleComponent } from './style/style.component';
import { PipeComponent } from './pipe/pipe.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'title',
    component: EditTitleComponent,
  },
  {
    path: 'buffet',
    component: BuffetComponent,
  },
  {
    path: 'action-bar',
    component: ActionBarComponent,
  },
  {
    path: 'max-min',
    component: MaxMinMeterComponent,
  },
  {
    path: 'sqaure',
    component: SqaureFlexComponent,
  },
  {
    path: 'twoway',
    component: TwowayComponent,
  },
  {
    path: 'view',
    component: ViewComponent,
  },
  {
    path: 'array',
    component: ArrayComponent,
  },
  {
    path: 'test-request',
    component: TestRequestGetComponent,
  },
  {
    path: 'primeng',
    component: PrimengComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'shopping-search',
    component: OutputshoppingComponent,
  },
  {
    path: 'getset',
    component: GetsetComponent,
  },
  {
    path: 'directive',
    component: DirectiveComponent,
  },
  {
    path: 'reactive',
    component: ReactiveformsComponent,
  },
  {
    path: 'forms',
    component: FormsmoduleComponent,
  },
  {
    path: 'create',
    component: CreatevalidatorComponent,
  },
  {
    path: 'style',
    component: StyleComponent,
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },
  {
    path: 'viewchild',
    component: ViewchildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
