<template>
  <div class="tw-bg-white tw-border">
    <Container>
      <div class="tw-py-4 tw-px-6">
        <div class="tw-flex tw-justify-between tw-items-center">
          <RouterLink to="/">
            <div class="tw-flex tw-items-center tw-cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="tw-h-6 tw-w-6 tw-text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              <span class="tw-ml-2 tw-font-semibold text-[#252C32]">
                What a Market
              </span>
            </div>
          </RouterLink>

          <div class="tw-ml-2 tw-flex">
            <RouterLink to="/users">
              <div
                  class="tw-flex tw-cursor-pointer tw-items-center tw-gap-x-1 tw-rounded-md tw-py-2 tw-px-4 hover:tw-bg-gray-100"
              >
                <div class="tw-relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="tw-h-5 tw-w-5 tw-text-gray-500"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>
                </div>
                <span class="tw-text-sm tw-font-medium tw-ml-3">Users</span>
              </div>
            </RouterLink>

            <div
              class="tw-flex tw-cursor-pointer tw-items-center tw-gap-x-1 tw-rounded-md tw-py-2 tw-px-4 hover:tw-bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="tw-h-5 tw-w-5 tw-text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                  fill-rule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="tw-text-sm tw-font-medium">Orders</span>
            </div>

            <div
              class="tw-flex tw-cursor-pointer tw-items-center tw-gap-x-1 tw-rounded-md tw-py-2 tw-px-4 hover:tw-bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="tw-h-5 tw-w-5 tw-text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="tw-text-sm tw-font-medium">Favorites</span>
            </div>

            <RouterLink to="/cart">
              <div
                class="tw-flex tw-cursor-pointer tw-items-center tw-gap-x-1 tw-rounded-md tw-py-2 tw-px-4 hover:tw-bg-gray-100"
              >
                <div class="tw-relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="tw-h-5 tw-w-5 tw-text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    />
                  </svg>
                  <span
                    class="tw-absolute tw--top-2 tw--right-2 tw-flex tw-h-4 tw-w-4 tw-items-center tw-justify-center tw-rounded-full tw-bg-red-500 tw-p-2 tw-text-xs tw-text-white"
                  >
                    {{ cart?.totalProducts }}
                  </span>
                </div>
                <span class="tw-text-sm tw-font-medium tw-ml-3">Cart</span>
              </div>
            </RouterLink>

            <div class="tw-flex tw-items-center tw-mr-2 tw-text-emerald-400">
              Hi - {{ user.firstName }} {{ user.lastName }}
            </div>

            <div
              v-if="loggedIn"
              class="tw-ml-2 tw-flex tw-cursor-pointer tw-items-center tw-gap-x-1 tw-rounded-md tw-border tw-py-2 tw-px-4 hover:tw-bg-gray-100"
              @click="signOut"
            >
              <span class="tw-text-sm tw-font-medium"> Sign out </span>
            </div>
            <RouterLink v-else to="/login">
              <div
                class="tw-ml-2 tw-flex tw-cursor-pointer tw-items-center tw-gap-x-1 tw-rounded-md tw-border tw-py-2 tw-px-4 hover:tw-bg-gray-100"
              >
                <span class="tw-text-sm tw-font-medium"> Sign in </span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from "./Container.vue";
import { useGetUserCarts } from "@/api/products/query";
import { useAuth } from "@/composables/useAuth";

const { user, loggedIn, signOut } = useAuth();
const { data: cart } = useGetUserCarts(user.value.id);
</script>

<style lang="scss" scoped></style>
