type Props = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: Props) => {
  return <div className={`px-5 md:px-16 ${className}`}>{children}</div>;
};
export default Section;
