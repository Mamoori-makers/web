type ComingSoonProps = {
  serviceName: string;
};

export const ComingSoon = ({ serviceName }: ComingSoonProps) => {
  return (
    <div className="flex flex-col items-center py-8">
      <p className="p-3 text-3xl font-light uppercase tracking-widest">Coming Soon</p>
      <p className="text-brown-100">{serviceName} 서비스는 준비 중입니다.</p>
      <p className="text-brown-100">빠른 시일 내에 준비하여 찾아봴게요.</p>
    </div>
  );
};
