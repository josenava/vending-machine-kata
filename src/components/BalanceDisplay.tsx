interface BalanceProps {
  quantity: number;
}

export const BalanceDisplay = ({ quantity }: BalanceProps) => {
  return <span>Your balance is {quantity} €</span>;
};
