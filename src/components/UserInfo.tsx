import { UUID } from "crypto"

interface UserProps {
    id: UUID;
    fullName: string;
}

export const UserInfo = ({id, fullName}: UserProps) => {
    return (
        <span>{fullName}</span>
    );
}