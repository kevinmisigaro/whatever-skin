export type Product = {
  slug: string;
  name: string;
  tagline: string;
  size: string;
  image: string;
  description: string;
  keyIngredients: { name: string; benefit: string }[];
  howToUse: string[];
};

export const products: Product[] = [
  {
    slug: "gentle-foaming-cleanser",
    name: "Gentle Foaming Cleanser",
    tagline: "A soft-foaming daily cleanse that never strips.",
    size: "100ml",
    image: "/images/hero-flatlay.jpg",
    description:
      "A lightweight, low-lather cleanser that lifts away makeup, SPF, and the day without disturbing your skin's natural barrier. Green tea extract calms while wintergreen clarifying extract keeps congestion in check, leaving skin soft, balanced, and ready for the rest of your routine.",
    keyIngredients: [
      {
        name: "Green Tea Extract",
        benefit: "Rich in antioxidants to soothe and protect against daily stressors.",
      },
      {
        name: "Wintergreen Clarifying Extract",
        benefit: "Gently clarifies pores without over-drying the skin.",
      },
    ],
    howToUse: [
      "Wet face with lukewarm water.",
      "Pump 1–2 times and work into a soft foam between your palms.",
      "Massage over damp skin in circular motions for 30 seconds.",
      "Rinse thoroughly and follow with serum and moisturizer.",
    ],
  },
  {
    slug: "blemish-control-serum",
    name: "Blemish Control Serum",
    tagline: "A targeted serum to calm, clarify, and even things out.",
    size: "30ml",
    image: "/images/hero-flatlay.jpg",
    description:
      "A fast-absorbing serum built around niacinamide and zinc PCA to help regulate shine, refine the look of pores, and support an even, resilient complexion over time — without disrupting sensitive or melanin-rich skin.",
    keyIngredients: [
      {
        name: "Niacinamide 10%",
        benefit: "Vitamin B3 that helps visibly refine pores and even skin tone.",
      },
      {
        name: "Zinc PCA",
        benefit: "Helps regulate excess oil and supports a clear, balanced complexion.",
      },
    ],
    howToUse: [
      "Apply to clean, dry skin morning and night.",
      "Use 3–4 drops and press gently into face and neck.",
      "Allow to fully absorb before layering moisturizer.",
      "Follow with SPF during the day.",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
