import { MainScreen } from "./components/MainScreen";

function App() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-bg">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-neonBlue/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-neonPink/25 blur-3xl" />
      </div>
      <MainScreen />
    </div>
  );
}

export default App;
