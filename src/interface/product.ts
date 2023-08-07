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

export interface IDefaultSelectedComponents {
  "CPU / Processor": IProduct | null;
  Motherboard: IProduct | null;
  RAM: IProduct | null;
  "Power Supply Unit": IProduct | null;
  "Storage Device": IProduct | null;
  [Monitor: string]: IProduct | null;
}

export interface BuilderContextType {
  selectedComponents: IDefaultSelectedComponents;
  addComponentToBuilder: (category: string, component: IProduct | null) => void;
}
