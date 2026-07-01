import { CARS } from "@/lib/data";
import { notFound } from "next/navigation";
import CarDetailClient from "@/components/CarDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return CARS.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const car = CARS.find((c) => c.slug === slug);
  if (!car) return {};
  return {
    title: `${car.name} – Giá & Thông số | VinFast Long An`,
    description: car.description,
  };
}

export default async function CarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = CARS.find((c) => c.slug === slug);
  if (!car) notFound();
  return <CarDetailClient car={car} />;
}
