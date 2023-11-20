<script setup lang="ts">
import { useGetUsers } from "@/api/users/query";

const router = useRouter();
const back = () => {
  router.back();
};

const { data } = useGetUsers();
</script>

<template>
  <button @click="back">ProfilE - Back</button>
</template>

