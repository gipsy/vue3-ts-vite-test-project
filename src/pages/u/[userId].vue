<script setup lang="ts">
import { useStoreUsers } from "@store/users";

const { state } = useStoreUsers()
const {
  params: { userId },
} = useRoute();

const currentUser = computed(() => {
  return state?.userList.find(user => user.id = userId)
})

</script>

<template>
  <div>
    <article class="tw-prose tw-max-w-full tw-my-4">
      <h2 class="tw-text-center tw-capitalize">
        Current user profile
      </h2>
    </article>
    <img
        class="tw-w-32 tw-h-32 tw-rounded-full tw-mx-auto"
        :src="currentUser.image"
        :alt="currentUser.username"
    />
    <h2 class="tw-text-center tw-text-2xs tw-font-semibold tw-mt-3">
      {{ currentUser.firstName }} {{ currentUser.lastName }}
    </h2>
    <p class="tw-text-center tw-text-gray-600 tw-mt-1">
      {{ currentUser.email }}
    </p>
    <p class="tw-text-center tw-text-gray-600 tw-mt-1">
      Address: {{ currentUser.address.address }}
    </p>
    <p class="tw-text-center tw-text-gray-600 tw-mt-1">
      City: {{ currentUser.address.city }}
    </p>
  </div>
</template>
