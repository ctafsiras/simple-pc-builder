export interface IProduct {
  id: number;
  image: string;
  name: string;
  category: string;
  "category-slug": string;
  status: string;
  price: string;
  description: string;
  key_features: {
    brand?: string;
    model?: string;
    socket?: string;
    chipset?: string;
    ram_slots?: string;
    ports?: string;
    form_factor?: string;
    voltage?: string;
  };
  individual_rating: string;
  average_rating: string;
  reviews: string[];
}
