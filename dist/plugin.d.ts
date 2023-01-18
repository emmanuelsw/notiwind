import type { App } from "vue";
declare function install(app: App): void;
declare const plugin: {
    install: typeof install;
};
export default plugin;
