interface ErrorMsgProps {

}

const ErrorMsg: React.FunctionComponent<ErrorMsgProps> = () => {
    return (
        <div id="errorMsg">
            <h2>Veuillez remplir les champs obligatoires</h2>
        </div>
    );
}

export default ErrorMsg;