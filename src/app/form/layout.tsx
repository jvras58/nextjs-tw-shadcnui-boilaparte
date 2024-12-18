export default function MyLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="h-screen flex items-center justify-center">
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
   
        {children}
      </section>
    )
  }