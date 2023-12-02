type TextErrorProps={
   // children: JSX.Element;  or React.ReactNode
   error: string;
}
//function TextError (props:TextErrorProps) {
    const TextError: React.FC<TextErrorProps> = ({ error }) => {
    return (
        <div className=" text-sm text-red-500">
            {error}
        </div>
    )
}

export default  TextError
