import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { FloatingComponentComponent } from './floating-component/floating-component.component';
import { GlassComponentComponent } from './glass-component/glass-component.component';
import { GlassmorphismButtonComponent } from './glassmorphism-button/glassmorphism-button.component';
import { GradientComponentComponent } from './gradient-component/gradient-component.component';
import { SlidingHighlightHoverComponentComponent } from './sliding-highlight-hover-component/sliding-highlight-hover-component.component';
import { WaveComponentComponent } from './wave-component/wave-component.component';

const routes: Routes = [
  { path: 'darkmode', component:DarkModeToggleComponent},
  { path: 'gradient', component: GradientComponentComponent},
  { path: 'glass', component: GlassComponentComponent},
  { path: 'floating', component: FloatingComponentComponent},
  { path: 'wave', component: WaveComponentComponent},
  { path: 'slide', component: SlidingHighlightHoverComponentComponent},
  { path: 'glassmorph', component: GlassmorphismButtonComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
