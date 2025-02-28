<script setup lang="ts">
// You can use the `useStrapi` composable to interact with your Strapi API.
// const {create, find} = useStrapi();
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-xl text-slate-800">
      BookThat Interview Assignment
    </h1>
    <p class="text-sm">Note: try to timebox 2h.</p>
    <ul class="mt-10">
      <li>1. As a user I want to use a from to create a todo.</li>
      A todo has the following properties: - name - status: open, in progress,
      done - due date
      <li>2. As a user I want to see a list with all the todo's</li>
      <li>3. As a user I want to be able to sort this list.</li>
      <li>4. Optional: go funky on the styling.</li>
    </ul>
  </div>
</template>
