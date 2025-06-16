# 🔍 Smart Search Dashboard (Angular + Signals + RxJS)

A responsive, reactive smart search UI built with Angular 17+, leveraging Signals and RxJS for a clean, modern architecture.

---

## 🎯 Features

- Real-time search with debounce
- Display product cards in a responsive grid
- Recent search tracking (max 5)
- Signal-based state management
- Loading spinner with reusable overlay
- Responsive dropdown suggestions
- API integration with DummyJSON

---

## 🧠 Architecture Overview

### As a Senior Developer, the approach follows:

#### 1. **Requirements → Architecture**
- Translate UI and feature requirements into logical building blocks:
  - `SearchInputComponent`
  - `SearchResultsComponent`
  - `RecentSearchesComponent`
  - `LoadingOverlayComponent`
  - `ProductService` (API logic)
  - `Signals/State` for local state handling

#### 2. **Signal-Driven State**
- Use `signal()`, `computed()`, and `effect()` for:
  - Managing recent searches
  - Storing current results
  - Tracking search input
  - Loading/error states

#### 3. **RxJS Where Needed**
- Use `Subject`, `debounceTime`, and `switchMap` for:
  - Handling user input stream
  - Avoiding unnecessary API calls

#### 4. **Component Contracts**
- Each component only receives inputs and emits outputs
- Parent container (`AppComponent`) manages coordination and state
- Avoid tight coupling or global state libraries unless scaling demands it

#### 5. **Styling and UX**
- TailwindCSS for rapid and responsive design
- Animations and overlays are clean and isolated
- Mobile-first: grid adapts to screen size with:
  - `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`

---

## 🧩 Component Breakdown

| Component              | Responsibility                            |
|------------------------|--------------------------------------------|
| `SearchBarComponent`   | Emits search terms, shows spinner, handles input |
| `RecentSearchesComponent` | Shows recent search terms (max 5), emits click |
| `SearchResultsComponent` | Renders product cards in a grid layout    |
| `LoadingOverlayComponent` | Displays fullscreen spinner during API calls |
| `ProductService`       | Makes API call, returns observable         |

---

## 🛠 Technologies

- Angular 17+ standalone components
- Signals API (`signal`, `effect`, `computed`)
- RxJS for input stream handling
- Tailwind CSS for UI
- DummyJSON for product data

---

## 🚀 How to Run

```bash
npm install
ng serve
