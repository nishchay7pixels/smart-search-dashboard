import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SearchBar } from './components/search-bar/search-bar';
import { SearchResults } from './components/search-results/search-results';
import { RecentSearches } from './components/recent-searches/recent-searches';
import { ProductServiceTs } from './services/product.service';
import { provideHttpClient } from '@angular/common/http';
import { LoadingOverlay } from "./shared/loading-overlay/loading-overlay";

@NgModule({
  declarations: [App, SearchBar, SearchResults, RecentSearches],
  imports: [BrowserModule, AppRoutingModule, LoadingOverlay],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  bootstrap: [App],
})
export class AppModule {}
