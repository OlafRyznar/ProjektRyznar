import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { useState } from "react";

export const AddCustomerForm = ({ onAdd }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onAdd(firstname,lastname,email,phonenumber);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <Input placeholder ="First name" className="mb-2" value={firstname} onChange={(e) => setFirstname(e.currentTarget.value)}></Input>
            <Input placeholder="Last name" className="mb-2" value={lastname} onChange={(e) => setLastname(e.currentTarget.value)}></Input>
            <Input placeholder="Email address" className="mb-2" value={email} onChange={(e) => setEmail(e.currentTarget.value)}></Input>
            <Input placeholder="Phone number" className="mb-2" value={phonenumber} onChange={(e) => setPhonenumber(e.currentTarget.value)}></Input>
            <Button variant="outline">Submit</Button>
        </form>
    )
};