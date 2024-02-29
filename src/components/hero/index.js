"use client"

import { Button } from "../ui/button"
import Link from "next/link"
import styles from "./style.module.css"

export default function HeroSection() {
    return (
        <section className="w-full mx-auto h-screen">
            <main className={styles.heroImg}>
                <div className={styles.heroText}>
                    <h1 className="text-5xl font-bold">Selamat Datang di 12 TKJ 3</h1>
                    <p className="py-3 text-lg">Kelas yang paling disayangi oleh guru-guru</p>
                    <Button variant="secondary" asChild>
                        <Link href="/profiles">Jelajahi TKJ 3</Link>
                    </Button>
                </div>
            </main>
        </section>
    )
}