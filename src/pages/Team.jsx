import Sidebar from "@/components/layout/Sidebar"; // CORRIGÉ

export default function Team() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <h1 className="text-3xl font-bold mb-8">Équipe</h1>
        <p className="text-muted-foreground">Membres de l'équipe...</p>
      </main>
    </div>
  );
}