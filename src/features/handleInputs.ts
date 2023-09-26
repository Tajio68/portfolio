export const handleInputs = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, setData: React.Dispatch<React.SetStateAction<any>>, prev: any) => {
    const {name, value} = e.target;
    setData(() => ({
        ...prev,
        [name]: value
    }));
} 