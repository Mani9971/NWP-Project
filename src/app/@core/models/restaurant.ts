export interface Restaurant {
  name: string;
  email: string;
  contactInfo: string;
  coordinates: { longitude: string; latitude: string };
  menuItems: MenuItem[];
  ownerId: string;
}

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: string;
  info: string;
}
