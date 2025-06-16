import { signal, computed, effect } from '@angular/core';

export const searchTerm = signal('');
export const recentSearches = signal<string[]>([]);
export const searchResults = signal<any[]>([]);
export const isLoading = signal(false);

export const hasResults = computed(() => searchResults().length > 0);

