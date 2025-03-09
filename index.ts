import { resolve } from "mlly";

async function test() {
  const test = await resolve("@indoorequal/vue-maplibre-gl");
  console.log(test);
}

test();
