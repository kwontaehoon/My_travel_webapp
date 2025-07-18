"use client"
import { useBoardsQuery, useCoursesQuery } from "@/hooks/supabase/dev"

const StatsCard = () => {
  const { data: boardsData, isLoading: boardLoading } = useBoardsQuery()
  const { data: coursesData, isLoading: courseLoading } = useCoursesQuery()
  return boardLoading || courseLoading ? (
    ""
  ) : (
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
      <div className="text-center">
        <div className="text-sm opacity-80 mb-2">전체 생성된 코스 수</div>
        <div className="text-3xl font-bold mb-4">
          {(boardsData.length) + (coursesData.length)}
        </div>
        <div className="text-xs opacity-60">개</div>
      </div>
    </div>
  )
}

export default StatsCard
