import { LevelContext } from "./someContextIdunno";

export default function Section({ level, children }: any) {
  return (
    <LevelContext.Provider value={level}>
    <section className="section">
      {children}
    </section>
    </LevelContext.Provider>
  );
}