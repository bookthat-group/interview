<script setup lang="ts">
// You can use the `useStrapi` composable to interact with your Strapi API.
// const {create, find} = useStrapi();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6"
  >
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
      <h1 class="text-3xl font-bold text-gray-800 text-center">
        BookThat Interview Assignment
      </h1>
      <p class="text-sm text-gray-600 text-center mt-2">
        Note: try to timebox 2h.
      </p>

      <ul class="mt-6 space-y-4 text-gray-700">
        <li class="bg-gray-100 p-4 rounded-lg shadow-sm">
          <span class="font-semibold">1.</span> As a user, I want to use a form
          to create a todo.
          <ul class="ml-4 mt-2 list-disc text-sm text-gray-600">
            <li>A todo has the following properties:</li>
            <li>- name</li>
            <li>- status: open, in progress, done</li>
            <li>- due date</li>
          </ul>
        </li>

        <li class="bg-gray-100 p-4 rounded-lg shadow-sm">
          <span class="font-semibold">2.</span> As a user, I want to see a list
          with all the todos.
        </li>

        <li class="bg-gray-100 p-4 rounded-lg shadow-sm">
          <span class="font-semibold">3.</span> As a user, I want to be able to
          sort this list.
        </li>

        <li class="bg-gray-100 p-4 rounded-lg shadow-sm">
          <span class="font-semibold">4.</span> Optional: Go funky on the
          styling.
        </li>
      </ul>
    </div>
  </div>
</template>
