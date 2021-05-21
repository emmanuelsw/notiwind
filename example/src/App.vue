<template>
  <div class="flex flex-col justify-center min-h-screen bg-gray-200 align-center">
    <div class="flex justify-center space-x-5">
      <button
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded w-54 hover:bg-blue-700"
        @click="onClickTop"
      >Top notification</button>
      <button
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded w-54 hover:bg-blue-700"
        @click="onClickBot"
      >Bottom notification</button>
    </div>

    <NotificationGroup group="top">
      <div class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none">
        <div class="w-full max-w-sm">
          <Notification v-slot="{ notifications }">
            <div
              class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex items-center justify-center w-12 bg-green-500">
                <svg
                  class="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                  ></path>
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-green-500">{{notification.title}}</span>
                  <p class="text-sm text-gray-600">{{notification.text}}</p>
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
          <Notification v-slot="{ notifications }">
            <div
              class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex items-center justify-center w-12 bg-red-500">
                <svg
                  class="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                  ></path>
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-red-500">{{notification.title}}</span>
                  <p class="text-sm text-gray-600">{{notification.text}}</p>
                </div>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    </NotificationGroup>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    onClickTop() {
      this.$notify(
        {
          group: "top",
          title: "Success",
          text: "Your account was registered!"
        },
        4000
      );
    },
    onClickBot() {
      this.$notify(
        {
          group: "bottom",
          title: "Error",
          text: "Your email is already used!"
        },
        4000
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>