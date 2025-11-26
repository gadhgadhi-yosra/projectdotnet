import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/layout/Sidebar"; // SEULE CETTE LIGNE
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  BarChart3, 
  Users, 
  FolderOpen,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  // ... (reste identique)
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      {/* ... */}
    </div>
  );
}

export default Dashboard;