<script setup lang="ts">
import { ref } from "vue";
import { useStrapi } from "#imports";

const { create } = useStrapi();

type Location = {
  id: number;
  name: string;
  street: string;
  houseNumber: string;
  houseNumberAddition: string;
  zipCode: string;
  city: string;
  country: string;
};

const form = ref({
  name: "",
  street: "",
  houseNumber: "",
  houseNumberAddition: "",
  zipCode: "",
  city: "",
  country: "",
  image: "",
});

const addLocation = async () => {
  if (
    !form.value.name ||
    !form.value.street ||
    !form.value.houseNumber ||
    !form.value.zipCode ||
    !form.value.city ||
    !form.value.country
  )
    return;

  try {
    await create("locations", {
      name: form.value.name,
      street: form.value.street,
      houseNumber: form.value.houseNumber,
      houseNumberAddition: form.value.houseNumberAddition,
      zipCode: form.value.zipCode,
      city: form.value.city,
      country: form.value.country,
    });

    form.value.name = "";
    form.value.street = "";
    form.value.houseNumber = "";
    form.value.houseNumberAddition = "";
    form.value.zipCode = "";
    form.value.city = "";
    form.value.country = "";
  } catch (err) {
    console.error("Failed to create location:", err);
  }
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-8"
  >
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
      <h1 class="text-3xl font-bold text-gray-800 text-center">
        BookThat Interview Assignment
      </h1>
      <p class="text-sm text-gray-600 text-center mt-2">
        Note: try to timebox 2h.
      </p>
      <p class="text-sm text-gray-600 text-center mt-2">
        We should add the lat long to the location on the create in the backend.
      </p>

      <!-- Form to add location -->
      <form @submit.prevent="addLocation" class="space-y-4 mt-6">
        <div>
          <label class="block text-gray-700 font-medium mb-1">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Street</label>
          <input
            v-model="form.street"
            type="text"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div class="flex space-x-4">
          <div class="flex-1">
            <label class="block text-gray-700 font-medium mb-1"
              >House Number</label
            >
            <input
              v-model="form.houseNumber"
              type="text"
              class="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div class="flex-1">
            <label class="block text-gray-700 font-medium mb-1"
              >House Number Addition</label
            >
            <input
              v-model="form.houseNumberAddition"
              type="text"
              class="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Zip Code</label>
          <input
            v-model="form.zipCode"
            type="text"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">City</label>
          <input
            v-model="form.city"
            type="text"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Country</label>
          <select
            v-model="form.country"
            class="w-full border px-3 py-2 rounded"
            required
          >
            <option value="" disabled>Select country</option>
            <option value="NL">Netherlands</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Add Location
        </button>
      </form>

      <!-- List of locations -->
      <ul class="mt-6 space-y-3">
        <!-- TODO: create a (sortable on created) list of locations -->
      </ul>
    </div>
  </div>
</template>
