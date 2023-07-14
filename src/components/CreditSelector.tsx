import { Button } from "@mui/material";

interface CreditChoiceProps {
    quantity: number
}


export const CreditChoice = ({quantity}: CreditChoiceProps) => {
    return (
        <Button variant="outlined">{quantity}€</Button>
    )
}


export const CreditSelector = () => {
    return (
        <ol>
            <li><CreditChoice quantity={0.10}/></li>
            <li><CreditChoice quantity={0.20}/></li>
            <li><CreditChoice quantity={0.50}/></li>
            <li><CreditChoice quantity={1.00}/></li>
            <li><CreditChoice quantity={2.00}/></li>
            <li><CreditChoice quantity={5.00}/></li>
        </ol>
    );
}