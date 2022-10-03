import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradientComponentComponent } from './gradient-component/gradient-component.component';
import { GlassComponentComponent } from './glass-component/glass-component.component';
import { FloatingComponentComponent } from './floating-component/floating-component.component';
import { SlidingHighlightHoverComponentComponent } from './sliding-highlight-hover-component/sliding-highlight-hover-component.component';
import { WaveComponentComponent } from './wave-component/wave-component.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { GlassmorphismButtonComponent } from './glassmorphism-button/glassmorphism-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GradientComponentComponent,
    GlassComponentComponent,
    FloatingComponentComponent,
    SlidingHighlightHoverComponentComponent,
    WaveComponentComponent,
    DarkModeToggleComponent,
    GlassmorphismButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
