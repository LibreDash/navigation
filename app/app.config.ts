export default defineAppConfig({
  apps: [
    {
      id: "navigation",
      name: "Navigation",
      icon: "/app/icons/navigation.png",
      entry: "/app/navigation",
    },
  ],
});

interface LibreDashApp {
  id: string;
  name: string;
  icon: string;
  entry: string;
}

declare module "nuxt/schema" {
  interface AppConfigInput {
    apps?: LibreDashApp[];
  }

  interface AppConfig {
    apps: LibreDashApp[];
  }
}
