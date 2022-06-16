export interface Restaurant {
  name: string;
  email: string;
  contactInfo: string;
  coordinates: GeolocationCoordinates;
  menuItems: MenuItem[];
}

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: string;
  info: string;
}
