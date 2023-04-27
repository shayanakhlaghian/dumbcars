const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className='bg-transparent border-2 border-gray-100 py-2 px-6 rounded-sm capitalize tracking-wider font-bold text-sm lg:text-lg hover:bg-gray-100 hover:text-blue-500'
    >
      {children}
    </button>
  );
};

export default Button;
