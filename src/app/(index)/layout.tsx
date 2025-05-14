export default function LayoutAuth({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-dvw h-dvh flex justify-center items-center">
      {children}
    </main>
  );
}
