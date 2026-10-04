import heroPoster from "@/assets/hero-poster.jpg";
import foodPoster from "@/assets/food-poster.jpg";
import experiencePoster from "@/assets/experience-poster.jpg";
import heroVideoAsset from "@/assets/cinnamon-hero.mp4.asset.json";
import type { VideoConfig } from "@/components/CinematicVideo";

export const business = {
  name: "Cinnamon Harpenden",
  tagline: "Takeaway & Restaurant in Harpenden",
  address: "3 Thompsons Cl, Harpenden AL5 4ES",
  phone: "01582 762567",
  phoneHref: "tel:01582762567",
  orderUrl: "https://cinnamonrestaurant.co.uk/order-online",
  reserveUrl: "https://cinnamonrestaurant.co.uk/reservation",
  dealsUrl: "https://cinnamonrestaurant.co.uk/deals",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cinnamon+3+Thompsons+Cl+Harpenden+AL5+4ES",
};

// Each section is configured independently. Food & experience videos fall back to their poster until a clip is added.
export const heroVideo: VideoConfig = {
  desktop: heroVideoAsset.url,
  mobile: heroVideoAsset.url,
  poster: heroPoster,
  label: "Copper bowls of steaming Indian curry, saffron rice and naan by candlelight",
};
export const foodVideo: VideoConfig = {
  desktop: undefined,
  mobile: undefined,
  poster: foodPoster,
  label: "A chef adds spices to a sizzling curry over open flame",
};
export const experienceVideo: VideoConfig = {
  desktop: undefined,
  mobile: undefined,
  poster: experiencePoster,
  label: "A waiter serves curry to smiling guests at a candlelit table",
};
