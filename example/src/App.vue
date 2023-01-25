<template>
  <div
    class="flex flex-col justify-center min-h-screen bg-gray-200 align-center"
  >
    <div class="flex items-center justify-center flex-1 space-x-5">
      <button
        class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring"
        @click="onClickTop"
      >
        Top notification
      </button>
      <button
        class="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring"
        @click="onClickBot"
      >
        Bottom notification
      </button>
    </div>

    <NotificationGroup group="top">
      <div
        class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
      >
        <div class="w-full max-w-sm">
          <Notification
            v-slot="{ notifications, close }"
            enter="ease-out duration-300 transition"
            enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
            enter-to="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
            move="transition duration-500"
            move-delay="delay-300"
          >
            <div
              v-for="notification in notifications"
              :key="notification.id"
              class="w-full max-w-sm mt-4 overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5"
            >
              <div class="p-4">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <svg
                      class="w-6 h-6 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="font-semibold text-gray-800">
                      {{ notification.title }}
                    </p>
                    <p class="text-sm font-semibold text-gray-500">
                      {{ notification.text }}
                    </p>
                  </div>
                  <div class="flex ml-4 shrink-0">
                    <button
                      class="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                      @click="close(notification.id)"
                    >
                      <span class="sr-only">Close</span>
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    </NotificationGroup>

    <NotificationGroup group="bottom" position="bottom">
      <div
        class="fixed inset-x-0 bottom-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
      >
        <div class="w-full max-w-sm">
          <Notification
            v-slot="{ notifications }"
            enter="ease-out duration-300 transition"
            enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
            enter-to="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
            move="transition duration-500"
            move-delay="delay-300"
          >
            <div
              v-for="notification in notifications"
              :key="notification.id"
              class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
            >
              <div class="flex items-center justify-center w-12 bg-red-500">
                <svg
                  class="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                  />
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-red-500">{{
                    notification.title
                  }}</span>
                  <p class="text-sm text-gray-600">
                    {{ notification.text }}
                  </p>
                </div>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    </NotificationGroup>
  </div>
</template>

<script setup lang="ts">
import { notify, Notification, NotificationGroup } from "./notiwind";

function onClickTop() {
  notify(
    {
      group: "top",
      title: "Success",
      text: "Your account was created 👌",
    },
    4000
  );
}

function onClickBot() {
  notify(
    {
      group: "bottom",
      title: "Error",
      text: "Invalid username or password!",
    },
    4000
  );
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
