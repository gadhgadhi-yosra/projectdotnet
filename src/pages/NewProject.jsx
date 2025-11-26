import Sidebar from "@/components/layout/Sidebar"; // CORRIGÉ
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewProject() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Créer un nouveau projet</h1>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name">Nom du projet</Label>
              <Input id="name" placeholder="Mon super projet" />
            </div>
            <div>
              <Label htmlFor="desc">Description</Label>
              <Input id="desc" placeholder="Décrivez votre projet..." />
            </div>
            <div className="flex gap-4">
              <Button type="submit">Créer</Button>
              <Button variant="outline">Annuler</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}