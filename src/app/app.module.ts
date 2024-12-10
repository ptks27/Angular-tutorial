import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ActionBarMaxMinComponent } from './action-bar-max-min/action-bar-max-min.component';
import { ActionBarViewComponent } from './action-bar-view/action-bar-view.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ActionComponent } from './action/action.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { BuffetComponent } from './buffet/buffet.component';
import { CreatevalidatorComponent } from './createvalidator/createvalidator.component';
import { DirectiveComponent } from './directive/directive.component';
import { EditTitleComponent } from './edit-title/edit-title.component';
import { FormsmoduleComponent } from './formsmodule/formsmodule.component';
import { GetsetComponent } from './getset/getset.component';
import { HomeComponent } from './home/home.component';
import { HttpBookDirective } from './http-book.directive';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { MaxMinComponent } from './max-min/max-min.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OutputshoppingComponent } from './outputshopping/outputshopping.component';
import { PipeComponent } from './pipe/pipe.component';
import { PipeModule } from './pipe/pipe.module';
import { PrimengComponent } from './primeng/primeng.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ShoppingModule } from './shopping/shopping.module';
import { SqaureFlexMainComponent } from './sqaure-flex-main/sqaure-flex-main.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';
import { StyleComponent } from './style/style.component';
import { TestRequestModule } from './test-request/test-request.module';
import { TwowayComponent } from './twoway/twoway.component';
import { ViewComponent } from './view/view.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EditTitleComponent,
    BuffetComponent,
    ActionBarComponent,
    ActionComponent,
    MaxMinMeterComponent,
    MaxMinComponent,
    ActionBarMaxMinComponent,
    SqaureFlexComponent,
    SqaureFlexMainComponent,
    TwowayComponent,
    ViewComponent,
    ActionBarViewComponent,
    ArrayComponent,
    PrimengComponent,
    OutputshoppingComponent,
    GetsetComponent,
    HttpBookDirective,
    DirectiveComponent,
    ReactiveformsComponent,
    FormsmoduleComponent,
    CreatevalidatorComponent,
    StyleComponent,
    PipeComponent,
    ViewchildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    FloatLabelModule,
    TableModule,
    ShoppingModule,
    IconFieldModule,
    InputIconModule,
    CardModule,
    ButtonModule,
    MessagesModule,
    ReactiveFormsModule,
    PipeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
