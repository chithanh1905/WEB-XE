import { CARS } from "@/lib/data";
import { notFound } from "next/navigation";
import CarDetailClient from "@/components/CarDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return CARS.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const car = CARS.find((c) => c.slug === params.slug);
  if (!car) return {};
  return {
    title: `${car.name} – Giá & Thông số | VinFast Long An`,
    description: car.description,
  };
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = CARS.find((c) => c.slug === params.slug);
  if (!car) notFound();
  return <CarDetailClient car={car} />;
}
