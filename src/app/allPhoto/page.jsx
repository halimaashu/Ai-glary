import PhotoCard from "@/components/shared/PhotoCard";
import React from "react";

export default async function AllPhotoPage() {
  const res = await fetch("https://ai-glary.vercel.app/data.json");
  const data = await res.json();
  console.log(data, "from all photo pages");
  return (
    <div className="py-20">
      <h1 className="text-2xl font-bold">All Photos</h1>
      <div className="grid grid-cols-4 gap-10">
        {data.map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
}
