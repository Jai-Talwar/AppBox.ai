import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestimonialsComponent} from "../components/testimonials/testimonials.component";
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    TestimonialsComponent
  ],
  exports: [
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class SharedModule {
}
