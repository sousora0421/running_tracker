import Link from "next/link";

interface RecordCardProps {
  id: number;
  date: string;
  distance: number;
  time: string;
  pace: string;
  type: string;
}

export default function RecordCard({
  id,
  date,
  distance,
  time,
  pace,
  type,
}: RecordCardProps) {
  return (
    <Link href={`/record/${id}`} className="block">
      <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition bg-white">
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time className="text-gray-400">{date}</time>
            <span className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300">{type}</span>
          </div>
          <div className="flex items-center gap-8 mt-4">
            <div>
              <p className="text-2xl font-bold text-gray-900 leading-none">{distance}</p>
              <p className="text-xs text-gray-500 mt-1">km</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 leading-none">{pace}</p>
              <p className="text-xs text-gray-500 mt-1">/km</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 leading-none">{time}</p>
              <p className="text-xs text-gray-500 mt-1">Time</p>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
}
