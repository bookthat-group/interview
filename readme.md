# BookThat Interview Assignment

Welcome to the BookThat technical assignment. This project helps us understand your approach to coding, how you structure logic, and your familiarity with backend and frontend workflows.

## Setup Instructions

1. **Install dependencies**

Run this in both `/strapi` and `/front-end` directories:

```bash
npm install
```

2. **Start the development servers**

Again, in both `/strapi` and `/front-end`:

```bash
npm run dev
```

3. **Follow the assignment**

Your main task is described below. Feel free to explore and make reasonable decisions — we’re interested in your reasoning and implementation more than perfection.

---

## Assignment Overview

### Part 1: Backend (Strapi API)

Update the `location` lifecycle hook (`/strapi/src/api/location/content-types/location/lifecycles.js`):

1. **Geocode**  
   Use the address fields to fetch the latitude and longitude using the OpenCage Geocoding API and store them in the location.

2. **Log Changes**  
   On update, compare the new data with the previous values and store the changed fields in a `log` content-type.

---

### 💻 Part 2: Frontend (Vue PWA)

Open `/front-end/pages/app.vue` and enhance it to:

- Display a list of all locations
- Sort the list by creation date

---

## ⚙️ Tech Stack

- **Backend**: Strapi (Node.js)
- **Frontend**: Vue 3 + Composition API + Tailwind (via Nuxt)
- **API**: OpenCage Geocoding API (for address → lat/lng)
