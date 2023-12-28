export default function Tabs({buttons, children, buttonContainer}){
    let ButtonContainer = buttonContainer;
    return(
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>
    );
}