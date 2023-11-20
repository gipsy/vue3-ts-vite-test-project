<template>
  <RouterLink :to="`/u/${user.id}`">
    <div
      class="tw-max-w-lg tw-mx-auto tw-my-10 tw-bg-white tw-rounded-lg tw-shadow-md tw-p-5 tw-border-solid tw-hover:border-dotted"
    >
      <img
        class="tw-w-32 tw-h-32 tw-rounded-full tw-mx-auto"
        :src="user.image"
        :alt="user.username"
      >
      <h2 class="tw-text-center tw-text-2xs tw-font-semibold tw-mt-3">
        {{ user.firstName }} {{ user.lastName }}
      </h2>
      <p class="tw-text-center tw-text-gray-600 tw-mt-1">
        {{ user.email }}
      </p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { IUser } from "@/types/user.types";

const { user } = defineProps<{ user: IUser }>();
</script>
