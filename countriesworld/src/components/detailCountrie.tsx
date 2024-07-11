type Info = {
  icon: React.ReactNode;
  field: string;
  value: string;
};

const DetailCountrie = ({ icon, field, value }: Info) => {
  return (
    <div className="flex flex-row items-baseline gap-1">
      {icon}
      <span className="font-bold">{field}: </span>
      <span>{value}</span>
    </div>
  );
};
export default DetailCountrie;
