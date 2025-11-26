// src/components/layout/Navbar.jsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckSquare } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <CheckSquare className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg">TaskFlow</span>
        </Link>

        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">Bonjour, {user.name || user.email}</span>
              <Button variant="ghost" size="sm" onClick={signOut}>
                Déconnexion
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/login">Connexion</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/signup">S’inscrire</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar; // CORRIGÉ : default