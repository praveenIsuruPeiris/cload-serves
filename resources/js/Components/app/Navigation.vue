<template>
    <nav class="min-w-[200px]">
      <Link :href="route('myFiles')" class="h-[80px] px-3 flex items-center gap-3">
        <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800"/>
      </Link>
      <div class="px-3">
        <CreateNewDropdown/>
        <div class="py-3">
          <NavLink :href="route('myFiles')" :active="$page.props.route_name === 'myFiles'">My Files</NavLink>
          <NavLink :href="route('file.sharedWithMe')" :active="$page.props.route_name === 'file.sharedWithMe'">Shared with me</NavLink>
          <NavLink :href="route('file.sharedByMe')" :active="$page.props.route_name === 'file.sharedByMe'">Shared by me</NavLink>
          <NavLink :href="route('trash')" :active="$page.props.route_name === 'trash'">Trash</NavLink>
          <!-- Storage Bar Section -->
          <div class="storage-bar-container my-4">
            <div class="storage-bar">
              <div class="storage-bar-fill" :style="{ width: progressBarWidth }"></div>
            </div>
            <div class="storage-info text-sm my-2">
              {{ usedStorage }} GB of {{ totalStorage }} GB used
            </div>
            <button @click="getMoreStorage" class="storage-button">
              Get more storage
            </button>
          </div>
          <!-- End Storage Bar Section -->
        </div>
      </div>
    </nav>
  </template>

  <script setup>
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import CreateNewDropdown from "@/Components/app/CreateNewDropdown.vue";
import NavLink from "@/Components/NavLink.vue";

  // Sample reactive state for storage (you might fetch these from an API)
  const usedStorage = ref(0); // GB
  const totalStorage = ref(32); // GB
// Computed property for the progress bar's width
  const progressBarWidth = computed(() => {
  return (usedStorage.value / totalStorage.value) * 100 + '%';
  });

  const fetchStorageUsage = async () => {
  try {
    const response = await axios.get('/storage-usage');
    usedStorage.value = parseFloat(response.data.usedStorage);
    totalStorage.value = parseFloat(response.data.totalStorage);
  } catch (error) {
    console.error('Error fetching storage usage:', error);
    // Handle error state here, for example:
    // - Set a flag to show an error message
    // - Provide default values
    // - Retry the request, etc.
  }
};


  // Dummy function for handling 'Get more storage' button click
  const getMoreStorage = () => {
    alert('Handle the logic to get more storage.');
  };

    // Fetch storage usage when component is mounted
    onMounted(() => {
        fetchStorageUsage();
    });
  </script>

  <style scoped>


  .storage-bar {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden; /* Ensures the fill doesn't spill out */
  }

  .storage-bar-fill {
    height: 8px;
    background-color: #4285f4;
    width: 0; /* Will be set by computed property */
    transition: width 0.5s ease; /* Smooth transition for the fill width */
  }

  .storage-info {
    text-align: center; /* Centers the text */
    margin-top: 8px; /* Spacing between the bar and the info text */
  }

  .storage-button {
    display: block;
    width: 100%;
    padding: 8px 0;
    border: none;
    border-radius: 4px;
    background-color: #4285f4;
    color: white;
    cursor: pointer;
    text-align: center; /* Aligns the button text */
    margin-top: 8px; /* Spacing between the info text and the button */
    transition: background-color 0.3s ease;
  }

  .storage-button:hover {
    background-color: #3367d6; /* Slightly darker blue on hover */
  }
  </style>
