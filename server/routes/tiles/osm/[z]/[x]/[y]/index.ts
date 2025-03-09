// import { Container } from "@versatiles/container";
import { z as zod } from "zod";

export default defineCachedEventHandler(
  async (event) => {
    const { z, x, y } = await getValidatedRouterParams(
      event,
      zod.object({
        z: zod.coerce.number(),
        x: zod.coerce.number(),
        y: zod.coerce.number(),
      }).parse,
    );

    // const container = new Container(
    //   "https://download.versatiles.org/osm.versatiles",
    // );
    // const header = await container.getHeader();
    // setHeader(event, "Content-Encoding", header.tileCompression);
    // setHeader(event, "Content-Type", header.tileMime);

    // return container.getTile(z, x, y);

    return sendRedirect(
      event,
      `https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/${z}/${x}/${y}.pbf`,
    );
  },
  {
    name: "tiles",
    maxAge: 60 * 60 * 24,
    getKey(event) {
      const { z, x, y } = getRouterParams(event);
      return `${z}_${x}_${y}`;
    },
  },
);
