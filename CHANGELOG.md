# CHANGELOG

<a name="1.2.6"></a>

### 1.2.6 (2022-06-08)

- Export `NotificationGroup` and `Notification` components ([#26](https://github.com/emmanuelsw/notiwind/pull/26)). Thanks [@Jimjam89](https://github.com/Jimjam89)!
- Update notify() to return a function allowing the notification to be closed programmatically ([#25](https://github.com/emmanuelsw/notiwind/pull/25)). Thanks [@Jimjam89](https://github.com/Jimjam89)!
- Fix bug where a timeout of a dismissed notification can close a new notification prematurely ([#25](https://github.com/emmanuelsw/notiwind/pull/25)). Thanks [@Jimjam89](https://github.com/Jimjam89)!
- Update core and example dependencies

<a name="1.2.5"></a>

### 1.2.5 (2022-01-24)

- Update core and example dependencies
- Update example to use Tailwind 3.0
- Remove @vue/compiler-sfc (as of vue 3.2.13+ and @vitejs/plugin-vue 1.9.0+ is no longer required as a peer dependency)

<a name="1.2.4"></a>

### 1.2.4 (2021-11-16)

- Update dependencies

<a name="1.2.3"></a>

### 1.2.3 (2021-09-09)

- Update dependencies

<a name="1.2.2"></a>

### 1.2.2 (2021-06-11)

- Update rollup modules

<a name="1.2.1"></a>

### 1.2.1 (2021-06-11)

- Add compatibility with the old component names
- Update dependencies

<a name="1.2.0"></a>

### 1.2.0 (2021-05-23)

- Include ESM and CommonJS builds
- Improve notification event system
- Expose the transition classes as props to support Tailwind's JIT
- Fix package import issues

<a name="1.0.1"></a>

### 1.0.1 (2021-05-20)

- Remove mitt dependency
- Update example to use the Composition API

<a name="1.0.0"></a>

### 1.0.0 (2021-05-20)

- Remove unused dependencies
- Rewrite a small part of the API
- Add support for the Composition API
- Fix incompatibility issues with Vite
