# AngularJS Project – Construction Projects Browser

## 📌 Overview

This project is a lightweight frontend application built with **AngularJS 1.8.x and TypeScript**. It enables users to browse, search, and view detailed information about construction projects.

The primary goal is to showcase proficiency in:

* Core AngularJS concepts (modules, components, services)
* Routing using `ngRoute`
* Implementing filtering and sorting functionality
* Structuring maintainable code in a legacy framework

---

## 🚀 Features

### 1. Project List

* Displays a curated list of construction projects, including:
  * Project Name
  * Associated Company
  * Location Area
  * Start and End Dates
  * Project Value (in GBP)

### 2. Filtering and Search

* Perform case-insensitive searches by project name
* Filter projects by specific areas or companies
* Combine multiple filters for precise results

### 3. Sorting

Projects are automatically sorted by:

1. **Project Value (descending order)**
2. **Project Name (ascending order)** for items with equal values

---

### 4. Project Detail Page

* Provides comprehensive project details:
  * Name
  * Company
  * Area
  * Dates
  * Value (in GBP)
  * Description

---

### 5. Edge Case Handling

* Displays "No projects found" when filters yield no results
* Shows "Project not found" for invalid IDs
* Gracefully handles empty or missing data

---

## 🧱 Tech Stack

* AngularJS 1.8.x
* TypeScript
* Vite (for development server and bundling)
* Plain CSS

---

## 📁 Project Structure

```
src/
 ├── main.ts
 ├── styles.css
 └── app/
     ├── app.module.ts
     ├── app.routes.ts
     ├── types/
     │   └── project.type.ts
     ├── services/
     │   └── project.service.ts
     ├── utils/
     │   └── project-filter.util.ts
     └── components/
         ├── project-list/
         │   ├── project-list.component.ts
         │   ├── project-list.controller.ts
         │   └── project-list.html
         └── project-detail/
             ├── project-detail.component.ts
             ├── project-detail.controller.ts
             └── project-detail.html
```

---

## ⚙️ How to Run Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

### 3. Access the Application

Open your browser and navigate to:

```
http://localhost:3000
```

---

## 🧠 Design Decisions

### Component-Based Architecture

Adopted AngularJS components over traditional `$scope` for better alignment with modern development practices.

### Separation of Concerns

* **Services** handle data management (currently mocked)
* **Utilities** manage filtering and sorting logic
* **Components** focus on UI rendering and user interactions
* **Types** define TypeScript interfaces for consistency

### Filtering Approach

Filters update instantly on user input for a responsive experience.

### Typing Strategy

* Strong typing for core models and services
* Minimal custom types where AngularJS typings are unreliable

---

## ⚖️ Assumptions

* Data is simulated locally (no external API needed)
* Dates are shown in their raw format (no custom formatting required)
* Currency values are displayed in GBP using AngularJS's built-in filter

---

## 🔧 Tradeoffs and Limitations

* Unit tests are not included (can be integrated later with Jasmine/Karma)
* No pagination or lazy loading for handling large datasets
* AngularJS type definitions are inconsistent, leading to simplified typing

---

## 🚀 Possible Improvements

* Implement pagination for better performance with extensive data
* Integrate with a real API to replace mocked data
* Add comprehensive unit tests using Jasmine and Karma
* Enhance date formatting (e.g., to `dd MMM yyyy`)
* Introduce lazy loading for components to optimize bundle size

---

## 💬 Summary

This project demonstrates how to build a **clean, maintainable AngularJS application** with strong separation of concerns, making it suitable for legacy systems or quick prototypes.