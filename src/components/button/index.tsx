interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="btn btn-primary bg-white font-bold">{children}</button>
  );
}
