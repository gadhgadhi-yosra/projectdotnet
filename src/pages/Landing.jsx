import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar"; // default
import { CheckSquare, ArrowRight, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-primary shadow-elegant">
              <CheckSquare className="h-10 w-10 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Gérez vos projets comme un pro
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            TaskFlow vous aide à organiser, suivre et accomplir vos tâches avec votre équipe, en toute simplicité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="h-12 px-8 text-base font-medium bg-gradient-primary hover:opacity-90">
              <Link to="/signup">
                Commencer gratuitement <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
              <Link to="/login">Se connecter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle>Rapide & Intuitif</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Interface fluide, conçue pour vous faire gagner du temps dès la première utilisation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle>Collaboration en temps réel</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Travaillez ensemble, assignez des tâches, commentez et suivez l’avancement.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle>Sécurisé & Fiable</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Vos données sont chiffrées et sauvegardées en temps réel.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-t from-primary/5 to-transparent py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à booster votre productivité ?
          </h2>
          <Button asChild size="lg" className="h-12 px-8 text-base bg-gradient-primary hover:opacity-90">
            <Link to="/signup">
              Créer un compte gratuit
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Landing;