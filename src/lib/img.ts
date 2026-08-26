export function unsplash(id: string, width = 1200, quality = 80, height?: number) {
  const h = height ? `&h=${height}` : "";
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}${h}&q=${quality}`;
}

/** Curated Unsplash photo IDs used as placeholder interior photography. */
export const photos = {
  heroLiving: "1600210492493-0946911123ea",
  heroBlindsCloseup: "1616486338812-3dadae4b4ace",
  aboutInterior: "1586023492125-27b2c045efd7",
  aboutInstall: "1493663284031-b7e3aefcae8e",
  offerLiving: "1567016432779-094069958ea5",
  curtainsLiving: "1631679706909-1844bbd07221",
  bedroomCurtains: "1493809842364-78817add7ffb",
  shuttersBathroom: "1615874959474-d609969a20ed",
  flooringHallway: "1618221195710-dd6b41faaea6",
  livingSofa: "1505873242700-f289a29e1e0f",
  interiorWide: "1519710164239-da123dc03ef4",
  interiorCozy: "1519974719765-e6559eac2575",
  livingBright: "1512918728675-ed5a9ecdebfd",
  modernInterior: "1554995207-c18c203602cb",
  bedroomSoft: "1600585154340-be6161a56a0c",
  livingWarm: "1584622781564-1d987f7333c1",
  apartmentModern: "1600607687939-ce8a6c25118c",
  livingMinimal: "1600121848594-d8644e57abab",
  interiorDetail: "1449844908441-8829872d2607",
  windowFabric: "1583847268964-b28dc8f51f92",
  interiorNeutral: "1560448204-e02f11c3d0e2",
  bedroomLight: "1560184897-ae75f418493e",
  livingEarthy: "1584622650111-993a426fbf0a",
  loungeCorner: "1522708323590-d24dbb6b0267",
  hallwayLight: "1615529182904-14819c35db37",
} as const;
