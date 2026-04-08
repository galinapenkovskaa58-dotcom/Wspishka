import type { MenuItem, MessagePreview, TariffPreview } from "./types";

export const mainMenuMock: MenuItem[] = [
  {
    id: "booking",
    title: "Записаться",
    subtitle: "Подберем идеальный тариф и стили",
    badge: "Top"
  },
  {
    id: "profile",
    title: "Кабинет",
    subtitle: "История заявок и статус"
  },
  {
    id: "gift",
    title: "Подарок",
    subtitle: "Сюрприз после первого бронирования"
  },
  {
    id: "question",
    title: "Вопрос",
    subtitle: "Написать ассистенту Вспышке"
  }
];

export const tariffsMock: TariffPreview[] = [
  {
    id: "start",
    title: "Start",
    description: "Быстрый вход в нейрофотосессию",
    price: "от 2 900 ₽",
    accent: "blue"
  },
  {
    id: "signature",
    title: "Signature",
    description: "Главный пакет для яркого образа",
    price: "от 5 900 ₽",
    accent: "violet"
  },
  {
    id: "muse",
    title: "Muse",
    description: "Премиум-сценарий с персональным стилем",
    price: "от 9 900 ₽",
    accent: "pink"
  }
];

export const chatPreviewMock: MessagePreview[] = [
  {
    id: "1",
    author: "assistant",
    text: "Привет! Я Вспышка. Помогу за 2 минуты выбрать формат съемки."
  },
  {
    id: "2",
    author: "user",
    text: "Хочу что-то стильное для личного бренда."
  },
  {
    id: "3",
    author: "assistant",
    text: "Супер. Начнем с тарифа Signature и пары mood-стилей?"
  }
];
