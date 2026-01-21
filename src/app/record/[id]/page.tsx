export default function RecordDetailPage({ params }: { params: { id: string } }) {
  const record = {
    id: params.id,
    date: "2026-01-20",
    distance: 5.0,
    time: "25:30",
    type: "ジョグ",
    pace: "5:06",
    heartRate: 145,
    memo: "少し体が重かったが、後半はリズム良く走れた。気温は5度で少し寒かったが、走り始めるとちょうど良かった。"
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-6">
          <a href="/" className="text-blue-500 text-sm hover:underline">← 戻る</a>
          <h1 className="text-2xl font-bold mt-4">トレーニング詳細</h1>
        </header>

        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-gray-500">{record.date}</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
              {record.type}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 text-sm">距離</p>
              <p className="text-3xl font-bold">{record.distance} km</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">タイム</p>
              <p className="text-3xl font-bold">{record.time}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">平均ペース</p>
              <p className="text-xl font-semibold">{record.pace} /km</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">平均心拍数</p>
              <p className="text-xl font-semibold">{record.heartRate} bpm</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-400 text-sm mb-2">メモ</p>
            <p className="text-gray-700 leading-relaxed">{record.memo}</p>
          </div>
        </div>
      </div>
    </main>
  )
}