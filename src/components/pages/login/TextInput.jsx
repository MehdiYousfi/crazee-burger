import styled from "styled-components";

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
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0; //could be handle in Parent too

  .icon{
 font-size: 15px;
 margin-right: 8px;
 color: #93a2b1;

}

input{
  border: none;
  font-size: 15px;
  color: #17161a;
}


`;