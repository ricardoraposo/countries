type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={ `flex px-20 py-8 ${className}` }>
      {children}
    </div>
  );
}

export default Container;
