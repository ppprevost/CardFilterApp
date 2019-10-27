import React, {FunctionComponent} from 'react';
import styled from "styled-components";

const StyledInput = styled.div`
height:52px;
border:1px solid #ECECEC;

margin : 10px 30px 0 30px;
.material-icons.prefix {
    top: calc(1.5rem - 12px);
    color: #9e9e9e;
}
.input-field input[type=text] {
    font-size: 20px;
    font-weight: 300;
    
}

.input-field input[type=text]:not(.browser-default):focus:not([readonly]) + label {

    color: #0168AB;
}
.input-field .prefix.active {
    color: #0168AB;
}

.input-field input[type=text]:not(.browser-default):focus:not([readonly]) {
    border-bottom: 1px solid #0168AB;
    box-shadow: 0 1px 0 0 #0168AB;
}
`

interface SearchInputProps {
    label:string
}

const SearchInput:FunctionComponent<React.InputHTMLAttributes<HTMLInputElement> & SearchInputProps> = ({label, value, ...inputProps}) => (
    <StyledInput className="SearchInput input-field">
    <i className="material-icons prefix">search</i>
        <input placeholder="Que recherchez-vous" id={"globalSearch"} type="text" {...inputProps} value={value} />
    </StyledInput>
);

export default SearchInput;