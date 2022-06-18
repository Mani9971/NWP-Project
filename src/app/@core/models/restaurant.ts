export interface Restaurant {
  name: string;
  email: string;
  contactInfo: string;
  coordinates: { longitude: string; latitude: string };
  ownerId: string;
}

interface MenuItem {
  name: string;
  price: string;
  category: string;
  info: string;
}
