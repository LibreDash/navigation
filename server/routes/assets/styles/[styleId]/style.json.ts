import dark from "../../../../assets/dark.json";
import light from "../../../../assets/light.json";

export default defineEventHandler(async (event) => {
  const { styleId } = getRouterParams(event);
  const { origin } = new URL(
    event.headers.get("referer") || "http://localhost:3000",
  );

  return {
    version: 8,
    name: "LibreDash",
    glyphs: `${origin}/assets/glyphs/{fontstack}/{range}.pbf`,
    sprite: [
      {
        id: "basics",
        url: `${origin}/assets/sprites/basics/sprites`,
      },
    ],
    sources: {
      map: {
        tiles: [`${origin}/tiles/osm/{z}/{x}/{y}`],
        type: "vector",
        scheme: "xyz",
        bounds: [5.9559, 45.818, 10.4921, 47.8084],
        minzoom: 0,
        maxzoom: 14,
      },
    },
    layers: styleId === "dark" ? dark : light,
  };
});
