import { Toaster as SonnerToaster } from "sonner";

function Sonner() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: "bg-card text-card-foreground border shadow-lg",
          title: "font-semibold",
          description: "text-sm text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-muted-foreground",
          success: "border-success/20",
          error: "border-destructive/20",
          info: "border-primary/20",
        },
      }}
    />
  );
}

export default Sonner; // CORRIGÉ : export default