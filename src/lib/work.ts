import family1 from "@/assets/family-1.jpg";
import family2 from "@/assets/family-2.jpg";
import family3 from "@/assets/family-3.jpg";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";

export type Category = "families" | "couples" | "portraits";

export type Photo = {
  src: string;
  alt: string;
  category: Category;
  orientation: "portrait" | "landscape";
};

export const photos: Photo[] = [
  {
    src: family1,
    alt: "A family of four laughing together on a blanket in a sunlit Lisbon park",
    category: "families",
    orientation: "portrait",
  },
  {
    src: couple1,
    alt: "A couple holding each other at a Lisbon viewpoint at sunset",
    category: "couples",
    orientation: "landscape",
  },
  {
    src: portrait1,
    alt: "Portrait of a woman in soft window light wearing linen",
    category: "portraits",
    orientation: "portrait",
  },
  {
    src: family2,
    alt: "A father lifting his baby into the air beside a bright window",
    category: "families",
    orientation: "landscape",
  },
  {
    src: couple2,
    alt: "A couple laughing forehead to forehead in warm daylight",
    category: "couples",
    orientation: "portrait",
  },
  {
    src: portrait2,
    alt: "Portrait of a man against a weathered pale wall in Lisbon",
    category: "portraits",
    orientation: "portrait",
  },
  {
    src: family3,
    alt: "Two sisters holding hands on old tiled Lisbon steps",
    category: "families",
    orientation: "portrait",
  },
  {
    src: couple3,
    alt: "A couple walking along the riverfront at dusk",
    category: "couples",
    orientation: "landscape",
  },
  {
    src: portrait3,
    alt: "Sunlight falling across folded linen",
    category: "portraits",
    orientation: "landscape",
  },
];

export const byCategory = (category: Category) =>
  photos.filter((photo) => photo.category === category);

export const categoryCover: Record<Category, Photo> = {
  families: photos[0]!,
  couples: photos[1]!,
  portraits: photos[2]!,
};
