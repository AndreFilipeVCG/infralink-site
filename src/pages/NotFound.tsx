import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Oops! A página que você está procurando não existe.
        </p>
        <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary-hover">
          <a href="/">Voltar ao Início</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
