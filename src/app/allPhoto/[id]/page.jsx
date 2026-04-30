import Image from 'next/image';

export default async function PhotoDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch("https://ai-glary.vercel.app/data.json");
  const data = await res.json();
  const image = data.find(d => d.id === Number(id));

  if (!image) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-500">Image not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="w-10/12 mx-auto shadow-2xl rounded-xl bg-base-200 p-8 flex flex-col md:flex-row gap-10">

        {/* Image */}
        <div className="flex-1">
          <Image
            src={image.imageUrl}
            width={600}
            height={450}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={image.title}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{image.title}</h1>

          <span className="badge badge-outline">{image.category}</span>

          <p className="text-gray-500 text-sm leading-relaxed">
            <span className="font-semibold text-gray-700">Prompt: </span>
            {image.prompt}
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-base-300 rounded-lg p-3">
              <p className="text-gray-500">Model</p>
              <p className="font-semibold">{image.model}</p>
            </div>
            <div className="bg-base-300 rounded-lg p-3">
              <p className="text-gray-500">Resolution</p>
              <p className="font-semibold">{image.resolution}</p>
            </div>
            <div className="bg-base-300 rounded-lg p-3">
              <p className="text-gray-500">Likes</p>
              <p className="font-semibold">♥ {image.likes}</p>
            </div>
            <div className="bg-base-300 rounded-lg p-3">
              <p className="text-gray-500">Downloads</p>
              <p className="font-semibold">↓ {image.downloads}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {image.tags.map(tag => (
              <span key={tag} className="badge badge-ghost">#{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}