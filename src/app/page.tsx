import RecordCard from "@/components/RecordCard";
import Link from "next/link";

export default function Home() {
  // サンプルデータ（心拍数とメモを追加しました）
  const records = [
    {
      id: 1,
      date: "2026-01-20",
      distance: 5.0,
      time: "25:30",
      type: "ジョグ",
      pace: "5:06",
      heartRate: 145,
      memo: "少し体が重かったが、後半はリズム良く走れた。"
    },
    {
      id: 2,
      date: "2026-01-21",
      distance: 10.0,
      time: "50:00",
      type: "ペース走",
      pace: "5:00",
      heartRate: 160,
      memo: "設定通り。ラスト1kmは追い込めた。"
    },
    {
      id: 3,
      date: "2026-01-22",
      distance: 5.0,
      time: "25:30",
      type: "ジョグ",
      pace: "5:06",
      heartRate: 145,
      memo: "少し体が重かったが、後半はリズム良く走れた。"
    },
    {
      id: 4,
      date: "2026-01-23",
      distance: 10.0,
      time: "50:00",
      type: "ペース走",
      pace: "5:00",
      heartRate: 160,
      memo: "設定通り。ラスト1kmは追い込めた。"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600">Running Tracker</h1>
          <Link 
            href="/record/new" 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition font-medium"
          >
            記録を追加
          </Link>
        </header>

        <section>
          <h2 className="text-xl font-semibold mb-4">最近の記録</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {records.map((record) => (
              <RecordCard
                key={record.id}
                {...record} // recordの中身をまとめて渡す便利な書き方です
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
