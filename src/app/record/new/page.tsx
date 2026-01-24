"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewRecordPage() {
  const router = useRouter();

  // 入力データを管理するための「State（状態）」
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    distance: "",
    time: "",
    type: "ジョグ",
    heartRate: "",
    memo: "",
  });

  // 入力内容が変わったときに実行される関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 保存ボタンを押したときの処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("保存されたデータ:", formData);
    // TODO: ここでデータベースに保存する処理を後で書きます
    alert("記録を保存しました（現在はコンソールへの出力のみです）");
    router.push("/"); // トップページに戻る
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-500 text-sm hover:underline">← 戻る</Link>
          <h1 className="text-2xl font-bold mt-2">ランニング記録の追加</h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 日付 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">日付</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* 距離と種目 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">距離 (km)</label>
              <input
                type="number"
                name="distance"
                step="0.01"
                placeholder="5.0"
                value={formData.distance}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 border p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">種目</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 border p-2"
              >
                <option value="ジョグ">ジョグ</option>
                <option value="ペース走">ペース走</option>
                <option value="インターバル">インターバル</option>
                <option value="ビルドアップ">ビルドアップ</option>
                <option value="その他">その他</option>
              </select>
            </div>
          </div>

          {/* タイムと心拍数 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">タイム (分)</label>
              <input
                type="number"
                name="time"
                placeholder="25"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 border p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">平均心拍数</label>
              <input
                type="number"
                name="heartRate"
                placeholder="150"
                value={formData.heartRate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 border p-2"
              />
            </div>
          </div>

          {/* メモ */}
          <div>
            <label className="block text-sm font-medium text-gray-700">メモ</label>
            <textarea
              name="memo"
              rows={3}
              value={formData.memo}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 border p-2"
              placeholder="練習の感想など"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            記録を保存する
          </button>
        </form>
      </div>
    </main>
  );
}
