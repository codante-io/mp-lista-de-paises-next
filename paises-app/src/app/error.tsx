"use client";

export default function Error({ error }) {
  return <div className="p-4 text-red-600">Erro: {error.message}</div>;
}
