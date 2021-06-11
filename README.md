
# Notiwind

<a href="https://www.npmjs.com/package/notiwind">
  <img src="https://img.shields.io/npm/v/notiwind.svg?color=41b883" alt="Npm Version">
</a>
<a href="https://bundlephobia.com/package/notiwind">
  <img src="https://img.shields.io/bundlephobia/minzip/notiwind" alt="Size">
</a>
<a href="https://github.com/emmanuelsw/notiwind/blob/master/LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-428F7E.svg" alt="License">
</a>

A headless Vue 3 notification library to use with Tailwind CSS.
This is a fork and port of [vue3-vt-notifications](https://github.com/killmenot/vue3-vt-notifications) created and modified by [killmenot](https://github.com/killmenot) to support Vue 3. Initially created by [sansil](https://github.com/sansil).

## 🌟 Features

- 100% Customizable
- Composition API support
- Create different groups of notifications
- Tailwind's JIT support

## 🤖 Demo

[Live Preview](https://notiwind-demo.netlify.app)

## ⚡️ Installation

```bash
yarn add notiwind
```

or

```bash
npm i notiwind
```

You can then register `Notifications` as a Vue plugin:

```js
import { createApp } from 'vue'
import Notifications from 'notiwind'
import App from './App.vue'

createApp(App)
  .use(Notifications)
  .mount('#app')
```

## 🍞 How to use

Add the notification components to your main layout or in `App.vue`:

```vue
<NotificationGroup group="foo">
  <!-- Here put your notifications wrapper box -->
  ...
  <Notification v-slot="{ notifications }">
    <!-- Here put your notification layout -->
    ...
  </Notification>
</NotificationGroup>
```

Then, trigger notifications from your `.vue` files:

###### Options API

```javascript
this.$notify({
  group: "foo",
  title: "Success",
  text: "Your account was registered!"
}, 2000) // 2s
```

###### Composition API

```javascript
import { notify } from "notiwind"

notify({
  group: "foo",
  title: "Success",
  text: "Your account was registered!"
}, 4000) // 4s
```

### Basic example

For example in your `App.vue`

```vue
<NotificationGroup group="foo">
  <div
    class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
  >
    <div class="w-full max-w-sm">
      <Notification
        v-slot="{ notifications }"
        enter="transform ease-out duration-300 transition"
        enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
        enter-to="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
        move="transition duration-500"
        move-delay="delay-300"
      >
        <div
          class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
          v-for="notification in notifications"
          :key="notification.id"
        >
          <div class="flex items-center justify-center w-12 bg-green-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
          </div>

          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span class="font-semibold text-green-500">{{ notification.title }}</span>
              <p class="text-sm text-gray-600">{{ notification.text }}</p>
            </div>
          </div>
        </div>
      </Notification>
    </div>
  </div>
</NotificationGroup>
```

Then in any of your `.vue` files:

```javascript
this.$notify({
  group: "foo",
  title: "Success",
  text: "Your account was registered!"
}, 2000) // 2s
```

The first argument is an object containing the data for the `Notification` element, it's important to specify the group where the notificatoins are going to be displayed, the second argument is the timeout. The default timeout is 3 seconds.

### Example with differents groups

You can use the `NotificationGroup` component to have different types of notifications. For example, notifications error messages in top center and generic app notifications in bottom-right corner.

```vue
<NotificationGroup group="error">
  <div
    class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
  >
    <div class="w-full max-w-sm">
      <Notification
        v-slot="{ notifications }"
        enter="transform ease-out duration-300 transition"
        enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
        enter-to="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
        move="transition duration-500"
        move-delay="delay-300"
      >
        <div
          class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
          v-for="notification in notifications"
          :key="notification.id"
        >
        <div class="flex items-center justify-center w-12 bg-red-500">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
          </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class="font-semibold text-red-500">{{ notification.title }}</span>
            <p class="text-sm text-gray-600">{{ notification.text }}</p>
          </div>
        </div>
        </div>
      </Notification>
    </div>
  </div>
</NotificationGroup>

<NotificationGroup group="generic">
  <div
    class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
  >
    <div class="w-full max-w-sm">
      <Notification
        v-slot="{ notifications }"
        enter="transform ease-out duration-300 transition"
        enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
        enter-to="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
        move="transition duration-500"
        move-delay="delay-300"
      >
        <div
          class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
          v-for="notification in notifications"
          :key="notification.id"
        >
          <div class="flex items-center justify-center w-12 bg-blue-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
            </svg>
          </div>

          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span class="font-semibold text-blue-500">{{ notification.title }}Info</span>
              <p class="text-sm text-gray-600">{{ notification.text }}</p>
            </div>
          </div>
        </div>
      </Notification>
    </div>
  </div>
</NotificationGroup>
```

Then in any of your `.vue` files:

```javascript
// Error notifcation
this.$notify({
  group: "error",
  title: "Error",
  text: "Your email is already used!"
}, 4000)

// Generic notification
this.$notify({
  group: "generic",
  title: "Info",
  text: "This channel archived by the owner"
}, 4000)
```

### Using different types of notifcations

You can render different types of notifications in the same group using a conditional, for example `v-if="notification.type === 'info'"`

```vue
<NotificationGroup group="foo">
  <div class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none">
    <div class="w-full max-w-sm">
      <Notification
        v-slot="{ notifications }"
        enter="transform ease-out duration-300 transition"
        enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
        enter-to="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
        move="transition duration-500"
        move-delay="delay-300"
      >
        <div v-for="notification in notifications" :key="notification.id">
          <div
            v-if="notification.type === 'info'"
            class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
          >
            <div class="flex items-center justify-center w-12 bg-blue-500">
              <svg
                class="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-blue-500">{{ notification.title }}</span>
                <p class="text-sm text-gray-600">T{{ notification.text }}</p>
              </div>
            </div>
          </div>

          <div
            class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
            v-if="notification.type === 'warning'"
          >
            <div class="flex items-center justify-center w-12 bg-yellow-500">
              <svg
                class="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-yellow-500">{{ notification.title }}</span>
                <p class="text-sm text-gray-600">{{ notification.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </Notification>
    </div>
  </div>
</NotificationGroup>
```

Then in any of your `.vue` files:

```javascript
// Error notifcation
this.$notify({
  title: "Info",
  text: "This channel archived by the owner!",
  type: "info",
  group: "foo",
}, 4000)

// Generic notification
this.$notify({
  title: "Warning",
  text: "Your image size is too large!",
  type: "warning",
  group: "foo",
}, 4000)
```

## Props

##### Props for the `Notification` component, all are opcional.

| Name             | Type   | Default    | Description                                     |
| ---------------- | ------ | ---------- | ----------------------------------------------- |
| maxNotifications | Number |     10     | Maximum notifications displayed simultaneously  |
| enter            | String |     ""     | *enter-active-class* transition classes. Applied during the entire entering phase.            |
| enterFrom        | String |     ""     | *enter-from-class* transition classes. Starting state for enter.           |
| enterTo          | String |     ""     | *enter-to-class* transition classes. Ending state for enter.           |
| leave            | String |     ""     | *leave-active-class* transition classes. Applied during the entire leaving phase.           |
| leaveFrom        | String |     ""     | *leave-from-class* transition classes. Starting state for leave.            |
| leaveTo          | String |     ""     | *leave-to-class* transition classes. Ending state for leave.           |
| move             | String |     ""     | *move-class* transition classes. Added when items are changing positions.           |
| moveDelay        | String |     ""     | Delay between the position change. `delay-300` recommended value.          |

Check the Vue docs to know more about [Enter & Leave Transitions](https://v3.vuejs.org/guide/transitions-enterleave.html#transition-classes) and [List Move Transitions](https://v3.vuejs.org/guide/transitions-list.html#list-move-transitions).

##### Props for `NotificationGroup` component, all are opcional.

| Name     | Type   | Description                             |
| -------- | ------ | --------------------------------------- |
| position | String | "bottom" or "top" are the posible values. |
| group    | String | Name of the group of notifications.      |

## Defualt scoped slots

Scope props:

| Name          | Type     | Description                                                              |
| ------------- | -------- | ------------------------------------------------------------------------ |
| notifications | Array    | Array of notification objects.                                             |
| close         | Function | Closes the notification. Expects the notification ID as parameter |

### Example

```vue
<Notification
  v-slot="{ notifications, close }"
  enter="transform ease-out duration-300 transition"
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
    class="relative px-4 py-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded"
    role="alert"
  >
    <strong class="font-bold">Holy smokes!</strong>
    <span class="block sm:inline">Something seriously bad happened.</span>

    <button @click="close(notification.id)" class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg
        class="w-6 h-6 text-red-500 fill-current"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Close</title>
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </button>
  </div>
</Notification>
```

## TODO

* Add tests

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

MIT
