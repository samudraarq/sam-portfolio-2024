type Props = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: Props) => {
  return <div className={`px-4 lg:px-16 md:px-8 ${className}`}>{children}</div>;
};
export default Section;
