export const PARK = {
  latitude: 45.604251290050264,
  longitude: -73.83093958835828,
  radius: 100, // mètres — à valider sur le terrain
  name: "Parc à chiens — Centre d'interprétation de la nature",
};

function haversineMeters(
  lat1: number, lng1: number,
  lat2: number, lng2: number
): number {
  const R = 6371000;
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function isInsidePark(lat: number, lng: number): boolean {
  return haversineMeters(lat, lng, PARK.latitude, PARK.longitude) <= PARK.radius;
}
