import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
export default function PhotoCard({ photo }) {
  return (
    <Card className="border">
      <div className="relative w-full aspect-square">
        <Image
          fill
          src={photo.imageUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className="object-cover rounded-2xl"
          
        />
        <Chip className="absolute top-2 right-2">{photo.category}</Chip>
      </div>
      <div className="">
        <h1 className="text-left font-medium">{photo.title}</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-5">
          <p>
            <FaHeart />{" "}
          </p>
          <p>{photo.likes}</p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex justify-center items-center gap-5">
          <p>
            <CiSaveDown2 />{" "}
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>
     <Link href={`/allPhoto/${photo.id}`}>
      <Button className="w-full">View Detail</Button>
     </Link>
    </Card>
  );
}
