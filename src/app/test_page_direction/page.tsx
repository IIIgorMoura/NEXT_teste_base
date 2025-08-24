import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link'

export default function Home() {
  return (
    <div>
        <p>Arroz</p>
        <Link href='/'>
            Voltar
        </Link>
    </div>
  );
}
