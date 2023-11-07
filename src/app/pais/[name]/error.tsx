"use client";

import Link from "next/link";

export default function Error() {
  return (
    <>
      <div>
        <h2>Informações do país Não Encontrada</h2>
      </div>
      <Link href="/" className="flex items-center py-2">
        <span className="text-xl"> ⬅ </span> Voltar
      </Link>
    </>
  );
}
