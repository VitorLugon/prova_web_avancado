import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bem vindo ao Portal de Receitas</h1>
      <Link href="/recipes">Ver Receitas</Link>
    </div>
  );
}
