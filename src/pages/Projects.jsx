import Sidebar from "@/components/layout/Sidebar"; // CORRIGÉ
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Projects() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Mes Projets</h1>
            <Button>
              <Plus className="mr-2 h-5 w-5" /> Nouveau projet
            </Button>
          </div>
          <div className="text-center text-muted-foreground py-20">
            Aucun projet pour le moment.
          </div>
        </div>
      </main>
    </div>
  );
}