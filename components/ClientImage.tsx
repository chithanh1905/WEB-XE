"use client";

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function ClientImage({ src, alt, className, fallback }: ClientImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.style.display = "none";
        if (fallback && e.currentTarget.parentElement) {
          e.currentTarget.parentElement.classList.add("show-fallback");
        }
      }}
    />
  );
}
