interface UserProps {
  name: string;
}

export const UserInfo = ({ name }: UserProps) => {
  return <span>{name}</span>;
};
