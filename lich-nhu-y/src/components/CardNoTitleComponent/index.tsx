import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  noBorder?: boolean;
}

export const CardNoTitleComponent = (props: Props) => {
  const { children, className, noBorder } = props;
  return (
    <div
      className={`bg-[#F2F4F7] rounded-[32px] border border-[#111111]
          ${noBorder ?? "shadow-custom-shadow"} ${className}`}
    >
      <>{children}</>
    </div>
  );
};
