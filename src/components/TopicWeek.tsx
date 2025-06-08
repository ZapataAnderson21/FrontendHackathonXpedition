interface TopicWeekProps {
  topicName: string;
}

export default function TopicWeek({ topicName }: TopicWeekProps) {
  return (
    <div className="flex flex-col bg-white rounded-br-sm rounded-bl-sm px-4 gap-4 py-4 first:pt-4">
      <div className="w-full h-full py-4 px-5 rounded-md border-b border-gray-300 cursor-pointer hover:bg-gray-50 shadow-sm">
        <p>{topicName}</p>
      </div>
    </div>
  );
}
