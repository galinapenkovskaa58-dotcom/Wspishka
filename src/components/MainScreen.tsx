import { chatPreviewMock, mainMenuMock, tariffsMock } from "../constants";

const accentClass = {
  blue: "from-neonBlue/35 to-neonCyan/15",
  violet: "from-neonViolet/35 to-neonBlue/15",
  pink: "from-neonPink/35 to-neonViolet/15"
} as const;

export function MainScreen() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-5 px-4 pb-8 pt-6 text-white">
      <section className="animate-soft-fade rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glowBlue backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.24em] text-neonCyan/85">DreamStudio</p>
        <h1 className="mt-2 text-2xl font-semibold leading-tight">Вспышка</h1>
        <p className="mt-2 text-sm text-slate-300">
          Премиальный AI-ассистент для записи на нейрофотосессию.
        </p>
      </section>

      <section className="animate-soft-fade rounded-2xl border border-white/10 bg-gradient-to-br from-neonBlue/20 via-neonViolet/15 to-neonPink/10 p-4 shadow-glowPink backdrop-blur-xl">
        <p className="text-sm font-medium text-slate-200">Диалог с ассистентом</p>
        <div className="mt-3 space-y-2">
          {chatPreviewMock.map((message) => (
            <div
              key={message.id}
              className={`rounded-xl px-3 py-2 text-sm ${
                message.author === "assistant"
                  ? "mr-6 bg-white/10 text-white"
                  : "ml-6 bg-neonBlue/25 text-slate-100"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </section>

      <section className="animate-soft-fade">
        <p className="mb-2 text-sm font-medium text-slate-300">Главное меню</p>
        <div className="grid grid-cols-2 gap-3">
          {mainMenuMock.map((item) => (
            <button
              key={item.id}
              type="button"
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left transition hover:border-neonCyan/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{item.title}</span>
                {item.badge ? (
                  <span className="rounded-full bg-neonPink/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-neonPink">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-xs text-slate-400">{item.subtitle}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="animate-soft-fade">
        <p className="mb-2 text-sm font-medium text-slate-300">Тарифы (preview)</p>
        <div className="space-y-3">
          {tariffsMock.map((tariff) => (
            <article
              key={tariff.id}
              className={`rounded-2xl border border-white/10 bg-gradient-to-r ${accentClass[tariff.accent]} p-4`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold">{tariff.title}</h2>
                <p className="text-sm text-neonCyan">{tariff.price}</p>
              </div>
              <p className="mt-1 text-sm text-slate-200">{tariff.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
