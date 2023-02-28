import { ProductCardComponent } from '../product-card/product-card.component';

interface UserData {
  name: string;
  email?: string;
  password: string;
}

interface CardData {
  title?: string;
  publishedDate?: Date;
  image?: string;
  price?: number;
  author?: string;
  description?: string;
}

export { UserData, CardData };
