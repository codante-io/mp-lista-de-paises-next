'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Error() {
    return (
        <section className="flex flex-col container">
            <h1 className="text 5-xl text-center font-bold text-gray-800 my-16">
                Página não encontrada
            </h1>
            <Link className="flex items-center py-2" href="/">
                <Image src="/voltar.svg" alt="Icone seta de voltar" width={24} height={24} />
                Voltar
            </Link>
        </section>
    )
}