import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestRequestGetComponent } from './test-request-get/test-request-get.component';
import { TestRequestServiceComponent } from './test-request-service/test-request-service.component';

@NgModule({
  declarations: [TestRequestGetComponent, TestRequestServiceComponent],
  imports: [CommonModule],
  exports: [TestRequestGetComponent],
})
export class TestRequestModule {}
