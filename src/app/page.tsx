import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { DashboardSidebar } from 'components/sidebar/sidebar';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from 'components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'components/ui/breadcrumb';
import { Separator } from 'components/ui/separator';

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-zinc-900 dark:text-white text-4xl font-bold">
              NextJS Boilerplate
            </h1>
            <p className="text-zinc-900 dark:text-white text-xl">
              Bem vindo, {session.user?.name}
            </p>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}