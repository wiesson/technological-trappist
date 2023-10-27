
interface Props {
  alertBar?: {
    id: number;
    title: string;
   }
}

const SiteHeaderInfoBar = ({ alertBar }: Props) => {
  if (!alertBar?.title) {
    return null
  }

  return (
    <div className="flex justify-center bg-primary py-2 font-bold text-white">
      {alertBar.title}
    </div>
  );
};

export default SiteHeaderInfoBar;
