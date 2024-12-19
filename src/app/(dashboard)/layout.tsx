import { DashboardSidebar } from 'components/sidebar/sidebar';
import { SidebarProvider } from 'components/ui/sidebar';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    
    <SidebarProvider>
      <DashboardSidebar />
      {children}
    </SidebarProvider>
  );
}