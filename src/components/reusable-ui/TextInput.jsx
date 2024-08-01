import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({value, onChange, Icon, ...extraProps}) {
  
  return (
    <InputStyled>
      {Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps}/>
    </InputStyled>
  )
}

const InputStyled = styled.div`
  
  /* border: 1px solid red; */
  background-color: white;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0; //could be handle in Parent too

  .icon{
 font-size: ${theme.fonts.size.P0};
 margin-right: 8px;
 color: ${theme.colors.greySemiDark};

}

input{
  border: none;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.dark};

  &::placeholder{
  background:${theme.colors.white};
  color: ${theme.colors.greyMedium};
}


}



`;