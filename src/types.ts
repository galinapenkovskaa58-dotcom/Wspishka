export type MenuItem = {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
};

export type TariffPreview = {
  id: string;
  title: string;
  description: string;
  price: string;
  accent: "blue" | "violet" | "pink";
};

export type MessagePreview = {
  id: string;
  author: "assistant" | "user";
  text: string;
};
