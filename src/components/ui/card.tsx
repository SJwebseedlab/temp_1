export const Card = ({ children, ...props }) => (
  <div className="rounded-xl shadow-md p-4 bg-white" {...props}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="mt-2">{children}</div>
);