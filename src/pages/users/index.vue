<script setup lang="ts">
import { useGetUsers } from "@/api/users/query";
import UserItem from "@/components/user/UserItem.vue";

const { data } = useGetUsers();
</script>

<template>
  <Container>
    <article class="tw-prose tw-max-w-full tw-my-4">
      <h2 class="tw-text-center tw-capitalize">
        Users
      </h2>
    </article>
    <div class="tw-grid tw-grid-cols-4 tw-gap-4">
      <template
        v-for="user in data?.users" :key="user.id"
      >
        <UserItem :user="user"/>
      </template>
    </div>
  </Container>
</template>
