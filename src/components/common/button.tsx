type Props = {
  label: string;
};

const Button = ({ label }: Props) => {
  return (
    <button className="bg-slate-800 text-white rounded-full px-8 py-3">
      {label}
    </button>
  );
};
export default Button;
